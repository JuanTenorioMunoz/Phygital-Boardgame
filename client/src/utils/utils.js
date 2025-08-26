export const arrayObjectParamValuesFinder = (array, objectParam, objectValue, targetParam) => {
  const found = array.find(item => item[objectParam] === objectValue);
  return found ? found[targetParam] : null;
};