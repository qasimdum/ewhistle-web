export const convertToUTC = (date) => {
  let dateObject = new Date(date);
  const timeOffset = dateObject.getTimezoneOffset();
  return new Date(dateObject.getTime() - (timeOffset * 60 * 1000));
};
export const transformDateTimes = (date) => {
  let dateObject = new Date(date);
  const timeOffset = dateObject.getTimezoneOffset();
  dateObject = new Date(dateObject.getTime() - (timeOffset * 60 * 1000));
  return dateObject.getDate()+"/"+(dateObject.getMonth()+1)+"/"+dateObject.getFullYear()+" "+dateObject.getHours()+":"+dateObject.getMinutes()+":"+dateObject.getSeconds()
};
export const transformDates = (date) => {
  let dateObject = new Date(date);
  dateObject = new Date(dateObject.getTime());
  return dateObject.getDate()+"/"+(dateObject.getMonth()+1)+"/"+dateObject.getFullYear()
};
