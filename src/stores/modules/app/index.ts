import { fromJS } from 'immutable';

import { actionTypes, actionCreators } from './actions';

import { getToken } from '@/utils/auth';

const defaultState = {
  token: getToken() || '',
  errorMsg: ''
};

export default (state = fromJS(defaultState), action: any) => {};
