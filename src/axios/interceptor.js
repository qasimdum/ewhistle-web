import axios from 'axios';
import { notification } from 'antd';
import {config} from '../config/config';

const options = {
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type':'application/json',
    'Authorization': "Bearer " + config.BASE_URL
  }
}
let instance = axios.create(options);

instance.interceptors.request.use(request => {
  request.headers.Authorization = "Bearer " + localStorage.getItem('idToken');
  return request;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  return response.data;
}, error => {
  if (error && error.response && error.response.status === 401) {

    localStorage.removeItem('idToken');
    window.location.href = '/';
  }
  notification.error({
    message: error.name,
    description: error.response.data.msg,
    placement: 'topRight',
  })
  return Promise.reject(error);
});

export default instance;
