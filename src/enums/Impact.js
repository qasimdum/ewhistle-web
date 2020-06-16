import {create, namesToArray, getById} from './General';

export const enums = create({
  LESS_5000: 0,
  OMR_5001_25000: 1,
  OMR_25000_75000: 2,
  OMR_75000_150000: 3,
  OMR_150000_ABOVE: 4,
  DONT_KNOW: 5,
});

const names = {
  [enums.LESS_5000]: 'Less than $5000',
  [enums.OMR_5001_25000]: '$5000 - $25,000',
  [enums.OMR_25000_75000]: '$25,000 - $75,000',
  [enums.OMR_75000_150000]: '$75,000 - $150,000',
  [enums.OMR_150000_ABOVE]: '$150,000 +',
  [enums.DONT_KNOW]: 'UNSURE',
};

export const getSingleImpact = (key) => getById(names, key);
export default namesToArray(names);
