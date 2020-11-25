import axios from 'axios';
import appConfig from '@/config';
import { showLoading, hideLoading } from '@/utils/loading';
import { getToken } from '@/utils/auth';

// create axios instance
const instance = axios.create({
  withCredentials: true,
  baseURL: appConfig.baseUrl,
  timeout: 1000 * 60 * 10 // 10 min
});

// 有些特殊的请求，不需要展示loading
const noLoadingRequest: string[] = [];

let reqList: string[] = [];

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // 当前请求
    const request = JSON.stringify(config);
    // 如果当前已经在请求了，则不再处理
    if (!reqList.includes(request)) {
      reqList.push(request);
    }
    if (config.url && !noLoadingRequest.includes(config.url)) {
      showLoading();
    }
    const token = getToken();
    if (token) {
      config.headers['authorization'] = token;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    hideLoading();
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // 从请求列表中移除结束的
    reqList.splice(
      reqList.findIndex((item) => item === JSON.stringify(response.config)),
      1
    );
    // 如果当前已经没有进行中的异步请求了，则关闭loading
    if (reqList.length === 0) {
      hideLoading();
    }

    // 当响应结果不成功，则报错
    // todo: msg待定
    // if (!response.data.data.success) {
    //   Message.error({
    //     message: response.data.data.msg,
    //     duration: 2000
    //   })
    // }

    // todo: 如果提示未登录，则跳转401

    // 这里也可以根据返回的Code做一些指定处理
    return response;
  },
  (error) => {
    // 发生异常时，请求列表清空
    reqList.length = 0;
    // 关闭loading
    hideLoading();

    // 如果是取消请求的话，则抛出取消请求
    if (axios.isCancel(error)) {
      throw new axios.Cancel('cancel request');
    }
    // else {
    //   // 否则，提示错误
    //   Message.error({
    //     message: error.toString(),
    //     duration: 2000
    //   })
    // }
    return Promise.reject(error);
  }
);

export default instance;
