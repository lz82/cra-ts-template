import { AppPost } from '@/utils/request';

import { ICheckLoginRequest, ICheckLoginResponse } from './types';

export function checkLogin(data: ICheckLoginRequest) {
  return AppPost<ICheckLoginResponse>('/checkLogin', data);
}
