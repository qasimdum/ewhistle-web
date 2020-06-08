import {create, namesToArray, getById} from './General';

export const enums = create({
  EMBEZZELMENT_TO_SHOW_LOSSES: 0,
  OTHER: 1,
});

const names = {
  [enums.EMBEZZELMENT_TO_SHOW_LOSSES]: 'Embezzelment to show losses',
  [enums.OTHER]: 'Other',
};

export const getSingleBankruptcyFraud = (key) => getById(names, key);
export default namesToArray(names);
