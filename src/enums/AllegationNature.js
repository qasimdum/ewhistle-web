import {create, namesToArray, getById} from './General';

export const enums = create({
  FRAUD: 0,
  MISCONDUCT: 1,
  HSE_INCIDENT: 2,
});

const names = {
  [enums.FRAUD]: 'Fraud',
  [enums.MISCONDUCT]: 'Misconduct',
  [enums.HSE_INCIDENT]: 'HSE incident',
};

export const getSingleAllegationNature = (key) => getById(names, key);
export default namesToArray(names);




