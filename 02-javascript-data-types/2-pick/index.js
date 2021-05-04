/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let resultObj = Object.fromEntries(
      Object.entries(obj).filter(function([key]){
        return fields.find(item => item === key)
      })
    );
    return resultObj;
};
