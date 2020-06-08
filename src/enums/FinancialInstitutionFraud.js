import {create, namesToArray, getById} from './General';

export const enums = create({
  EMBEZZLEMENT_SCHEME: 0,
  LOAN_FRAUD: 1,
  REAL_ESTATE_FRAUD: 2,
  NEW_ACCOUNT_FRAUD_SCHEME: 3,
  ADVANCE_FEE_FRAUD: 4,
  LETTER_OF_CREDIT_FRAUD: 5,
  INSIDE_OUTSIDE_FRAUD: 6,
  OTHER: 7,
});

const names = {
  [enums.EMBEZZLEMENT_SCHEME]: 'Emblezzlement scheme',
  [enums.LOAN_FRAUD]: 'Loan fraud',
  [enums.REAL_ESTATE_FRAUD]: 'Real estate fraud',
  [enums.NEW_ACCOUNT_FRAUD_SCHEME]: 'New Account fraud scheme',
  [enums.ADVANCE_FEE_FRAUD]: 'Advance fee fraud',
  [enums.LETTER_OF_CREDIT_FRAUD]: 'Letter of credit fraud',
  [enums.INSIDE_OUTSIDE_FRAUD]: 'Inside/outside fraud',
  [enums.OTHER]: 'Other',
};

export const getSingleFinancialInstitutionFraud = (key) => getById(names, key);
export default namesToArray(names);
