import Cookies from 'js-cookie';

import appConfig from '@/config';

const { token } = appConfig;

const TOKEN_KEY = token || '_token_key_';

export function setToken(val: string): void {
  Cookies.set(TOKEN_KEY, val);
}
