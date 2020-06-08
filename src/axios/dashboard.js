import axios from './interceptor';

export const getAllegationTypes = (params) => {
	return axios.post('dashboard/nature', params);
}
export const getAllegationSeverity = (params) => {
	return axios.post('dashboard/severity', params);
}
export const getAllegationStatus = (params) => {
	return axios.post('dashboard/status', params);
}
export const getAllegationTypesTop = (params) => {
	return axios.post('dashboard/nature/top', params);
}
