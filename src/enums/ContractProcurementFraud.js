import {create, namesToArray, getById} from './General';

export const enums = create({
  FALSE_CONTRACT: 0,
  ANTI_COMPETITIVE_BEHAVIOUR: 1,
  TAKING_BRIBES: 2,
  INSIDER_INFORMATION: 3,
  ABUSE_OF_POSITION_OF_TRUST: 4,
  OTHER: 5,
});

const names = {
  [enums.FALSE_CONTRACT]: 'False Contract',
  [enums.ANTI_COMPETITIVE_BEHAVIOUR]: 'Anti Competitive Behaviour',
  [enums.TAKING_BRIBES]: 'Taking Bribes/Kickbacks',
  [enums.INSIDER_INFORMATION]: 'Insider Information',
  [enums.ABUSE_OF_POSITION_OF_TRUST]: 'Abuse of position of trust',
  [enums.OTHER]: 'Other',
};

export const getSingleContractProcurementFraud = (key) => getById(names, key);
export default namesToArray(names);
