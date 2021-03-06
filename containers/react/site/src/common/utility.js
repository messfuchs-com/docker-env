export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export const removeObjectById = (objectList, objectId) => {
  const newObjectList = objectList.filter(obj => obj.pointId !== objectId);
  return newObjectList;
};

export const removeObjectByIdx = (objectList, objectIdx) => {
  const newObjectList = [...objectList];
  // console.log(objectList);
  // console.log(objectIdx);
  newObjectList.splice(objectIdx, 1);
  return newObjectList;
};

export const prepareNumber = (valueIn, digits = 3, valueNaN = 'NaN') => {
  const valueOut = valueIn === undefined || valueIn === '' ? valueNaN : parseFloat(String(valueIn)).toFixed(digits);
  // console.log(valueOut);
  return valueOut;
};
