import {create, namesToArray, getById} from './General';

export const enums = create({
  MIDDLE_EAST: 0,
  UK: 1,
  EUROPE: 2
});

const names = {
  [enums.MIDDLE_EAST]: 'PwC Middle East',
  [enums.UK]: 'PwC UK',
  [enums.EUROPE]: 'PwC Europe',
};

export const getSingleEntity = (key) => getById(names, key);
export default namesToArray(names);




