import {create, namesToArray, getById} from './General';

export const enums = create({
  CERTAIN: 0,
  POSSIBLE: 1,
  SUSPICION: 2,
  UNSURE: 3,
});

const names = {
  [enums.CERTAIN]: 'Certain',
  [enums.POSSIBLE]: 'Possible',
  [enums.SUSPICION]: 'Suspicion',
  [enums.UNSURE]: 'Unsure',
};

export const getSingleCertainty = (key) => getById(names, key);
export default namesToArray(names);
