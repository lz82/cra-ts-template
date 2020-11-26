import { appApi } from '@/services';
import { setToken, getToken } from '@/utils/auth';

export const actionTypes = {
  SET_TOKEN: 'app/set_token',
  CLEAR_TOKEN: 'app/clear_token',
  SET_ERR_MSG: 'app/set_err_msg',
  CLEAR_ERR_MSG: 'app/clear_err_msg'
};

export const actionCreators = {
  setToken(val: string) {
    return {
      type: actionTypes.SET_TOKEN,
      payload: val
    };
  },
  clearToken() {
    return {
      type: actionTypes.CLEAR_TOKEN
    };
  },

  setErrMsg(val: string) {
    return {
      type: actionTypes.SET_ERR_MSG,
      payload: val
    };
  },

  clearErrMsg() {
    return {
      type: actionTypes.CLEAR_ERR_MSG
    };
  },

  checkLogin(data: any) {
    return async (dispatch: Function) => {
      try {
        const { token } = await appApi.checkLogin(data);
        setToken(token);
        dispatch(actionCreators.setToken(token));
      } catch (err) {
        dispatch(actionCreators.setErrMsg(err.toString()));
      }
    };
  }
};
