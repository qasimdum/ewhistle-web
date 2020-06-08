import {create, namesToArray, getById} from './General';

export const enums = create({
  SMOKING: 0,
  INAPPROPRIATE_GEAR: 1,
  NOT_COMPLYING_WITH_POLICES: 2,
  OTHER: 3,
});

const names = {
  [enums.SMOKING]: 'Smoking in unassigned areas',
  [enums.INAPPROPRIATE_GEAR]: 'Inappropriate HSE gear',
  [enums.NOT_COMPLYING_WITH_POLICES]: 'Not Complying with  HSE policies',
  [enums.OTHER]: 'Other',
};

export const getSingleHealthSafety = (key) => getById(names, key);
export default namesToArray(names);




