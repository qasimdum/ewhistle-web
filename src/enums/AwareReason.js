import {create, namesToArray, getById} from './General';

export const enums = create({
  WITNESS: 0,
  WAS_PART_OF_IT: 1,
  INTERNAL_PARTY_INFORMED: 2,
  EXTERNAL_PARTY_INFORMED: 3,
});

const names = {
  [enums.WITNESS]: 'I witnessed the allegation myself',
  [enums.WAS_PART_OF_IT]: 'I was part of it without realizing',
  [enums.INTERNAL_PARTY_INFORMED]: 'An internal  party informed me',
  [enums.EXTERNAL_PARTY_INFORMED]: 'An external party informed me',
};

export const getSingleAwareReason = (key) => getById(names, key);
export default namesToArray(names);
