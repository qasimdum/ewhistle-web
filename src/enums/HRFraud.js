import {create, namesToArray, getById} from './General';

export const enums = create({
  FALSE_QUALIFICATION: 0,
  FALSE_REFERENCES: 1,
  FALSE_SICK_LEAVE: 2,
  FALSE_EXPENSE_CLAIM: 3,
  IDENTITY_FRAUD: 4,
  FALSE_BUSINESS_TRAVEL: 5,
  PAYROLL_FRAUD: 6,
  OTHER: 7,
});

const names = {
  [enums.FALSE_QUALIFICATION]: 'False qualifications',
  [enums.FALSE_REFERENCES]: 'False references',
  [enums.FALSE_SICK_LEAVE]: 'False Sick Leave',
  [enums.FALSE_EXPENSE_CLAIM]: 'False Expense Claim',
  [enums.IDENTITY_FRAUD]: 'Identity Fraud',
  [enums.FALSE_BUSINESS_TRAVEL]: 'False Business Travel',
  [enums.PAYROLL_FRAUD]: 'Payroll Fraud',
  [enums.OTHER]: 'Other',
};

export const getSingleHRFraud = (key) => getById(names, key);
export default namesToArray(names);
