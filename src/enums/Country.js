import {create, namesToArray, getById} from './General';

export const enums = create({
  OMAN: 0,
  KUWAIT: 1,
  UAE: 2,
  INDIA: 3,
  QATAR: 4,
  SAUDI_ARABIA: 5,
  BAHRAIN: 6,
  EGYPT: 7,
  TURKEY: 8,
  SOUTH_AFRICA: 9,
  OTHER: 10,
});

const names = {
  [enums.OMAN]: 'Oman',
  [enums.KUWAIT]: 'Kuwait',
  [enums.UAE]: 'UAE',
  [enums.INDIA]: 'India',
  [enums.QATAR]: 'Qatar',
  [enums.SAUDI_ARABIA]: 'Saudi Arabia',
  [enums.EGYPT]: 'Egypt',
  [enums.BAHRAIN]: 'Bahrain',
  [enums.TURKEY]: 'Turkey',
  [enums.SOUTH_AFRICA]: 'South Africa',
  [enums.OTHER]: 'Other',
};

export const getSingleCountry = (key) => getById(names, key);
export default namesToArray(names);




