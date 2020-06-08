import {create, namesToArray, getById} from './General';

export const enums = create({
  SUSPECTED_FRAUD: 0,
  ACTUAL_FRAUD: 1,
  SUSPECTED_MISCONDUCT: 2,
  ACTUAL_MISCONDUCT: 3,
  ACTUAL_HSE_INCIDENT: 4,
  POTENTIAL_HSE_INCIDENT: 5,
});

const names = {
  [enums.SUSPECTED_FRAUD]: 'Suspected Fraud',
  [enums.ACTUAL_FRAUD]: 'Actual Fraud',
  [enums.SUSPECTED_MISCONDUCT]: 'Suspected Misconduct',
  [enums.ACTUAL_MISCONDUCT]: 'Actual Misconduct',
  [enums.ACTUAL_HSE_INCIDENT]: 'Actual HSE incident',
  [enums.POTENTIAL_HSE_INCIDENT]: 'Potential HSE incident',
};

export const getSingleAllegationNature = (key) => getById(names, key);
export default namesToArray(names);




