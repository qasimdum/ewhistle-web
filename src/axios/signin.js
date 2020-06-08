import axios from './interceptor';
export const signIn = (credentials) => {
  return axios.post('oauth/token', credentials);
};
