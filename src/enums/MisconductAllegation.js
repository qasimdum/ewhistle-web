import {create, namesToArray, getById} from './General';

export const enums = create({
  ILLEGAL_SUBSTANCES: 0,
  DISCRIMINATION: 1,
  MISUSE_OF_HOURS: 2,
  INSUBORDINATION: 3,
  VULGAR_LANGUAGE: 4,
  FACILITIES_FOR_PERSONAL: 5,
  WILLFILL_FAILURE: 6,
  BULLYING: 7
});

const names = {
  [enums.ILLEGAL_SUBSTANCES]: 'Illegal substances',
  [enums.DISCRIMINATION]: 'Discrimination',
  [enums.MISUSE_OF_HOURS]: 'Misuse of Office Hours',
  [enums.INSUBORDINATION]: 'Insubordination',
  [enums.VULGAR_LANGUAGE]: 'Use of inappropriate language',
  [enums.FACILITIES_FOR_PERSONAL]: 'Misuse of company property',
  [enums.WILLFILL_FAILURE]: 'Non-compliance with company policies',
  [enums.BULLYING]: 'Bullying'
};

export const getSingleMisconductAllegation = (key) => getById(names, key);
export default namesToArray(names);




