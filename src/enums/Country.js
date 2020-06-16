import {create, namesToArray, getById} from './General';

export const enums = create({
  UAE: 0,
  SAUDI_ARABIA: 1,
  OMAN: 2,
  QATAR: 3,
  BAHRAIN: 4,
  KUWAIT: 5,
  EGYPT: 6,
  JORDAN: 7
});

const names = {
  [enums.UAE]: 'UAE',
  [enums.SAUDI_ARABIA]: 'Saudi Arabia',
  [enums.OMAN]: 'Oman',
  [enums.QATAR]: 'Qatar',
  [enums.BAHRAIN]: 'Bahrain',
  [enums.KUWAIT]: 'Kuwait',
  [enums.EGYPT]: 'Egypt',
  [enums.JORDAN]: 'Jordan',
};

export const getSingleCountry = (key) => getById(names, key);
export default namesToArray(names);




