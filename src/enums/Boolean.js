import {create, namesToArray, getById} from './General';

export const enums = create({
  YES: 0,
  NO: 1,
});

const names = {
  [enums.YES]: 'Yes',
  [enums.NO]: 'No',
};

export const getSingleBoolean = (key) => getById(names, key);
export default namesToArray(names);




