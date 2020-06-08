import {create, namesToArray, getById} from './General';

export const enums = create({
  PROTIVITI: 0,
  ROYAL_DUTCH_SHELL: 1,
  WALMART: 2
});

const names = {
  [enums.PROTIVITI]: 'PwC',
  [enums.ROYAL_DUTCH_SHELL]: 'Royal Dutch Shell',
  [enums.WALMART]: 'Walmart',
};

export const getSingleEntity = (key) => getById(names, key);
export default namesToArray(names);




