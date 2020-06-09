import axios from "./interceptor";

export const getAllegationHistory = (trackingId) => {
	return axios.get('allegation/history/' + trackingId,);
}
export const getAllegationHistoryAdmin = (trackingId) => {
	return axios.get('allegation/history/admin/' + trackingId,);
}
export const sendAllegationHistory = (allegationId, text) => {
	return axios.post('allegation/history/' + allegationId, {text});
}
export const sendAllegationHistoryAdmin = (allegationId, text) => {
	return axios.post('allegation/history/admin/' + allegationId, {text});
}
export const uploadHistoryFile = (formData) => {
	return axios.post('history/upload-file/', formData);
};
