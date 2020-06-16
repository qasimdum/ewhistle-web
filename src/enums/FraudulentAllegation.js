import {create, namesToArray, getById} from './General';

export const enums = create({
  ASSET_MISAPROPRIATION: 0,
  BRIBERY: 1,
  BANKRUPTCY_FRAUD: 2,
  CHECK_CREDIT_FRAUD: 3,
  COMPUTER_INTERNET_FRAUD: 4,
  CONTRACT_PROCUREMENT_FRAUD: 5,
  CONSUMER_FRAUD: 6,
  /*FINANCIAL_INSTITUTION_FRAUD: 7,
  FINANCIAL_STATEMENT_FRAUD: 8,
  HEALTHCARE_FRAUD: 9,
  HR_FRAUD: 10,
  INTELLECTUAL_PROPERTY: 11,
  INSURANCE_FRAUD: 12,
  MONEY_LAUNDERING: 13,
  TAX_FRAUD: 14,
  SECURITY_FRAUD: 15,
  PAYMENT_FRAUD: 16,
  PUBLIC_SECTOR_FRAUD: 17,*/
});

const names = {
  [enums.ASSET_MISAPROPRIATION]: 'Asset misappropriation',
  [enums.BRIBERY]: 'Bribery',
  [enums.BANKRUPTCY_FRAUD]: 'Bankruptcy fraud',
  [enums.CHECK_CREDIT_FRAUD]: 'Check and credit card fraud',
  [enums.COMPUTER_INTERNET_FRAUD]: 'Internet fraud',
  [enums.CONTRACT_PROCUREMENT_FRAUD]: 'Contract/procurement fraud',
  [enums.CONSUMER_FRAUD]: 'Consumer fraud',
  /*[enums.FINANCIAL_INSTITUTION_FRAUD]: 'Financial Institution fraud',
  [enums.FINANCIAL_STATEMENT_FRAUD]: 'Financial Statement fraud',
  [enums.HEALTHCARE_FRAUD]: 'Healthcare fraud',
  [enums.HR_FRAUD]: 'HR Frauds',
  [enums.INTELLECTUAL_PROPERTY]: 'Intellectual property',
  [enums.INSURANCE_FRAUD]: 'Insurance fraud',
  [enums.MONEY_LAUNDERING]: 'Money laundering',
  [enums.TAX_FRAUD]: 'Tax fraud',
  [enums.SECURITY_FRAUD]: 'Security fraud',
  [enums.PAYMENT_FRAUD]: 'Payment Fraud to generate false payments',
  [enums.PUBLIC_SECTOR_FRAUD]: 'Public sector fraud',*/
};

export const getSingleFraudulentAllegation = (key) => getById(names, key);
export default namesToArray(names);




