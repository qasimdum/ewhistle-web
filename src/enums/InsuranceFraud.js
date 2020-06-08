import {create, namesToArray, getById} from './General';

export const enums = create({
  FALSE_CLAIM: 0,
  UNDERWRITING_IRREGULARITIES: 1,
  KICKBACKS: 2,
  AGENT_BROKER_FRAUD: 3,
  OTHER: 4,
});

const names = {
  [enums.FALSE_CLAIM]: 'False Claim',
  [enums.UNDERWRITING_IRREGULARITIES]: 'Underwriting irregularities',
  [enums.KICKBACKS]: 'Kickbacks',
  [enums.AGENT_BROKER_FRAUD]: 'Agent/broker fraud',
  [enums.OTHER]: 'Other',
};

export const getSingleInsuranceFraud = (key) => getById(names, key);
export default namesToArray(names);
