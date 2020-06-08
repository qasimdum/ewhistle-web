import axios from './interceptor';
export const getSingleUser = (params, paging) => {
  return axios.post('users/' + paging.offset + '/' + paging.limit, params);
};
export const assignUser = (userId, allegationId) => {
  return axios.post('user/assign', {userId, allegationId});
};
export const getAUsers = (params, paging) => {
  return axios.post('users/' + paging.offset + '/' + paging.limit, params);
};
export const saveUser = (params) => {
  return axios.put('user', params);
};
export const createUser = (params) => {
  return axios.post('user', params);
};
export const resetPassword = (params) => {
  return axios.post('reset-password', params);
};
export const getMyAccount = () => {
  return axios.get('user/me');
};
