import {create, namesToArray, getById} from './General';

export const enums = create({
  BOARD_MEMBER: 0,
  CHAIRMAN: 1,
  CEO: 2,
  SENIOR_MANAGEMENT: 3,
  SECTION_HEAD: 4,
  EMPLOYEE: 5,
});

const names = {
  [enums.BOARD_MEMBER]: 'Board Member',
  [enums.CHAIRMAN]: 'Chairman',
  [enums.CEO]: 'CEO',
  [enums.SENIOR_MANAGEMENT]: 'Senior Management',
  [enums.SECTION_HEAD]: 'Section Head',
  [enums.EMPLOYEE]: 'Employee',
};

export const getSingleJobTitle = (key) => getById(names, key);
export default namesToArray(names);




