import {create, namesToArray, getById} from './General';

export const enums = create({
  CASH_LEFT: 0,
  FRAUDULENT_DISBURSEMENT: 1,
  INVENTORY_AND_OTHER_ASSETS: 2,
  OTHER: 3,
});

const names = {
  [enums.CASH_LEFT]: 'Cash Left',
  [enums.FRAUDULENT_DISBURSEMENT]: 'Fraudulent Disbursement',
  [enums.INVENTORY_AND_OTHER_ASSETS]: 'Inventory and other assets',
  [enums.OTHER]: 'Other',
};

export const getSingleAssetMisappropriation = (key) => getById(names, key);
export default namesToArray(names);
