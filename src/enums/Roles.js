import {create, namesToArray, getById} from './General';

export const enums = create({
  ADMINISTRATOR: 0,
  REVIEWER: 1
});

const names = {
  [enums.ADMINISTRATOR]: 'Administrator',
  [enums.REVIEWER]: 'Reviewer',
};

export const getSingleRole = (key) => getById(names, key);
export default namesToArray(names);
