import axios from './interceptor';
export const getAllegations = (params, paging) => {
  return axios.post('allegations/' + paging.offset + '/' + paging.limit, params);
};
export const getSingleAllegation = (allegationId) => {
  return axios.get('allegation/' + allegationId);
};
export const getDepartments = () => {
  return axios.get('departments');
};
export const resolveAllegation = (allegationId, status) => {
  return axios.put('allegation/' + allegationId, {status});
};
export const uploadFile = (formData) => {
  return axios.post('upload-file/', formData);
};
export const saveAllegation = (params) => {
  return axios.post('allegation', params);
}
export const getAllegationByTrackingId = (trackingId) => {
  return axios.get('allegation/tracking/' + trackingId);
}
