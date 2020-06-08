import {create, namesToArray, getById} from './General';

export const enums = create({
  INACTIVE: 0,
  ACTIVE: 1
});

const names = {
  [enums.INACTIVE]: 'Inactive',
  [enums.ACTIVE]: 'Active',
};

export const getSingleUserStatus = (key) => getById(names, key);
export default namesToArray(names);
