import request from '@/utils/request';
import Cookies from 'js-cookie';
import { API_PREFIX } from '@/constants/common';

const accessToken = Cookies.get('access_token');

export async function query(): Promise<any> {
  return request(`${API_PREFIX}/users`);
}

export async function queryCurrent(): Promise<any> {
  return request(`/user/info?access_token=${accessToken}`, {
    method: 'GET',
    prefixType: 'sso',
  });
}

export async function queryNotices(): Promise<any> {
  return request(`${API_PREFIX}/notices`);
}
