import {create, namesToArray, getById} from './General';

export const enums = create({
  CREATING_DUMMY_EMPLOYEE: 0,
  PASSWORD_SHARING: 1,
  ATTEMPT_TO_LOAD_SOFTWARE_IN_INTERNET: 2,
  MALICIOUS_DELETION_OF_DATA: 3,
  ABUSE_OF_WIRELESS_NETWORK: 4,
  OBSENE_CONTENT: 5,
  FORGED_MESSAGES: 6,
  OBTAIN_SOMEONE_ELSES_PASSWORD: 7,
  IDENTITY_THEFT: 8,
  UNAUTHORISED_ACCESS_TO_INFORMATION: 9,
  LAPTOP_MOBILE_THEFT: 10,
  SOCIAL_ENGINEERING: 11,
  UNAUTHORISED_COPYING: 12,
  UNAUTHORISED_USE_OF_P2P_SHARING: 13,
  THEFT_OF_CONFIDENTIAL_INFORMATION: 14,
  SABOTAGING_BUSINESS: 15,
  OTHER: 16,
});

const names = {
  [enums.CREATING_DUMMY_EMPLOYEE]: 'Creating a Dummy Employee on the system',
  [enums.PASSWORD_SHARING]: 'Password Sharing / Stealing',
  [enums.ATTEMPT_TO_LOAD_SOFTWARE_IN_INTERNET]: 'Attempt to load software onto the network or the employees laptop',
  [enums.MALICIOUS_DELETION_OF_DATA]: 'Malicious deletion of data from applications and the network',
  [enums.ABUSE_OF_WIRELESS_NETWORK]: 'Abuse of Wireless network',
  [enums.OBSENE_CONTENT]: 'Obsene content',
  [enums.FORGED_MESSAGES]: 'Forged messages',
  [enums.OBTAIN_SOMEONE_ELSES_PASSWORD]: 'Obtaining/using someone else\'s password',
  [enums.IDENTITY_THEFT]: 'Identity fraud and identity theft',
  [enums.UNAUTHORISED_ACCESS_TO_INFORMATION]: 'Unauthorised access to information',
  [enums.LAPTOP_MOBILE_THEFT]: 'Laptop/mobile theft',
  [enums.SOCIAL_ENGINEERING]: 'Social Engineering',
  [enums.UNAUTHORISED_COPYING]: 'Unauthorized Copying of Files to Portable Storage Devices',
  [enums.UNAUTHORISED_USE_OF_P2P_SHARING]: 'Unauthorized Use of Peer-to-Peer File Sharing Programs',
  [enums.THEFT_OF_CONFIDENTIAL_INFORMATION]: 'Theft of Confidential Information',
  [enums.SABOTAGING_BUSINESS]: 'E-sabotaging businesses',
  [enums.OTHER]: 'Other',
};

export const getSingleComputerInternetFraud = (key) => getById(names, key);
export default namesToArray(names);
