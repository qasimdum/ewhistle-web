import {create, namesToArray, getById} from './General';

export const enums = create({
  EMPLOYEE: 0,
  BUSINESS_PARTNER: 1,
  CUSTOMER: 2,
  SUBCONTRACTOR: 3,
  VENDOR_SUBSCRIBER: 4,
  WITNESS: 5,
  OTHER: 6,
});

const names = {
  [enums.EMPLOYEE]: 'Employee',
  [enums.BUSINESS_PARTNER]: 'Business Partner',
  [enums.CUSTOMER]: 'Customer',
  [enums.SUBCONTRACTOR]: 'Subcontractor',
  [enums.VENDOR_SUBSCRIBER]: 'Vendor /Supplier',
  [enums.WITNESS]: 'Witness only',
  [enums.OTHER]: 'Other',
};

export const getSingleJobPosition = (key) => getById(names, key);
export default namesToArray(names);




