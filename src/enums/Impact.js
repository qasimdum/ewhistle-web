import {create, namesToArray, getById} from './General';

export const enums = create({
  LESS_15000: 0,
  OMR_15001_30000: 1,
  OMR_30001_60000: 2,
  ABOVE_60001: 3,
  DONT_KNOW: 4,
});

const names = {
  [enums.LESS_15000]: 'Less than OMR 15,000',
  [enums.OMR_15001_30000]: 'OMR 15,001 - OMR 30,000',
  [enums.OMR_30001_60000]: 'OMR 30,001 and OMR 60,000',
  [enums.ABOVE_60001]: 'Above OMR 60,001',
  [enums.DONT_KNOW]: 'I don\'t know',
};

export const getSingleImpact = (key) => getById(names, key);
export default namesToArray(names);
