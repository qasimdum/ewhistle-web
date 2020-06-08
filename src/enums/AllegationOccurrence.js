import {create, namesToArray, getById} from './General';

export const enums = create({
  ALREADY_OCCURRED: 0,
  MAY_OCCUR: 1,
  STILL_OCCURRING: 2,
});

const names = {
  [enums.ALREADY_OCCURRED]: 'Already occurred',
  [enums.MAY_OCCUR]: 'May occur',
  [enums.STILL_OCCURRING]: 'Still occurring',
};

export const getSingleAllegationOccurrence = (key) => getById(names, key);
export default namesToArray(names);




