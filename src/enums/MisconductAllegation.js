import {create, namesToArray, getById} from './General';

export const enums = create({
  ALCOHOL_DRUG: 0,
  DISCRIMINATION: 1,
  MISUSE_OF_HOURS: 2,
  INSUBORDINATION: 3,
  VULGAR_LANGUAGE: 4,
  FACILITIES_FOR_PERSONAL: 5,
  WILLFILL_FAILURE: 6,
  BULLYING_FIGHTING: 7,
  USING_INTERNET_FOR_OFFENSIVE_MATERIAL: 888,
  MISHANDLING_CONFIDENTIAL_DATA: 9,
  HARRASSMENT: 10,
  THREATS_OF_VIOLENCE: 11
});

const names = {
  [enums.ALCOHOL_DRUG]: 'Consumption of alcohol/drugs',
  [enums.DISCRIMINATION]: 'Discrimination',
  [enums.MISUSE_OF_HOURS]: 'Misuse of Office Hours',
  [enums.INSUBORDINATION]: 'Insubordination',
  [enums.VULGAR_LANGUAGE]: 'Using Vulgar language',
  [enums.FACILITIES_FOR_PERSONAL]: 'Using company facilities/equipment for personal reasons',
  [enums.WILLFILL_FAILURE]: 'Willfill failure to comply with policies',
  [enums.BULLYING_FIGHTING]: 'Bullying and fighting',
  [enums.USING_INTERNET_FOR_OFFENSIVE_MATERIAL]: 'Using internet to access obscene or offensive material',
  [enums.MISHANDLING_CONFIDENTIAL_DATA]: 'Mishandling confidential data',
  [enums.HARRASSMENT]: 'Harrassment',
  [enums.THREATS_OF_VIOLENCE]: 'Threats of Violence',
};

export const getSingleMisconductAllegation = (key) => getById(names, key);
export default namesToArray(names);




