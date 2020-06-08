import {create, namesToArray, getById} from './General';

export const enums = create({
  BRIBERY_FOR_AWARD: 0,
  BRIBERY_FOR_ON_TIME_PAYMENT: 1,
  BRIBERY_FOR_A_SERVICE: 2,
  BRIBERY_FOR_A_SERVICE_THEY_ARE_RESPONSIBLE: 3,
  OTHER: 4,
});

const names = {
  [enums.BRIBERY_FOR_AWARD]: 'Bribery for Award',
  [enums.BRIBERY_FOR_ON_TIME_PAYMENT]: 'Bribery for on time Payment',
  [enums.BRIBERY_FOR_A_SERVICE]: 'Bribery for a Service',
  [enums.BRIBERY_FOR_A_SERVICE_THEY_ARE_RESPONSIBLE]: 'Bribery to influence a service they are responsible for',
  [enums.OTHER]: 'Other',
};

export const getSingleBribery = (key) => getById(names, key);
export default namesToArray(names);
