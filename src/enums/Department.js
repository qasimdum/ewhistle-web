import {create, namesToArray, getById} from './General';

export const enums = create({
  FINANCE_ACCOUNTING: 0,
  PROCUREMENT_AND_CONTRACT: 1,
  HUMAN_RESOURCES: 2,
  OPERATIONS: 3,
  CUSTOMER_SERVICE: 4,
  ADMIN: 5,
  IT: 6,
  LEGAL: 7,
  OTHER: 8
});

const names = {
  [enums.FINANCE_ACCOUNTING]: 'Finance & Accounting',
  [enums.PROCUREMENT_AND_CONTRACT]: 'Procurement and Contracts',
  [enums.HUMAN_RESOURCES]: 'Human Resources',
  [enums.OPERATIONS]: 'Operations',
  [enums.CUSTOMER_SERVICE]: 'Customer Service',
  [enums.ADMIN]: 'Admin',
  [enums.IT]: 'IT',
  [enums.LEGAL]: 'Legal',
  [enums.OTHER]: 'Other',
};

export const getSingleDepartment = (key) => getById(names, key);
export default namesToArray(names);




