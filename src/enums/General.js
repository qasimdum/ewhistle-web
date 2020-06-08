export const create = (object) => {
  return Object.freeze(object);
};

export const namesToArray = (names) => {
  const result = [];
  if(names) {
    for(let key in names) {
      result.push({key, value: names[key]});
    }
    return result;
  }
  return [];
};

export const namesBooleanToArray = (names) => {
  const result = [];
  if(names) {
    for(let key in names) {
      result.push({key: !!key, value: names[key]});
    }
    return result;
  }
  return [];
};

export const getById = (names, key) => {
  return names.hasOwnProperty(key) ? names[key] : "unknown";
};
