import {create, namesToArray, getById} from './General';

export const enums = create({
  FALSE_CLAIM: 0,
  AGENT_FRAUD: 1,
  PROVIDER_FRAUD: 2,
  KICKBACKS: 3,
  OTHER: 4,
});

const names = {
  [enums.FALSE_CLAIM]: 'False claim',
  [enums.AGENT_FRAUD]: 'Agent fraud',
  [enums.PROVIDER_FRAUD]: 'Provider fraud',
  [enums.KICKBACKS]: 'Kickbacks',
  [enums.OTHER]: 'Other',
};

export const getSingleHethcareFraud = (key) => getById(names, key);
export default namesToArray(names);
