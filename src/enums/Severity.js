import {create, namesToArray, getById} from './General';

export const enums = create({
  HIGH: 0,
  MEDIUM: 1,
  LOW: 2,
});

const names = {
  [enums.HIGH]: 'High',
  [enums.MEDIUM]: 'Medium',
  [enums.LOW]: 'Low',
};

export const getSingleSeverity = (key) => getById(names, key);
export default namesToArray(names);
