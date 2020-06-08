import {create, namesToArray, getById} from './General';

export const enums = create({
  TAX_EVASION: 0,
  OTHER: 2,
});

const names = {
  [enums.TAX_EVASION]: 'Tax evasion with false FS',
  [enums.OTHER]: 'Other',
};

export const getSingleTaxFraud = (key) => getById(names, key);
export default namesToArray(names);
