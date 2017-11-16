/**
 * Checks if an array is empty
 * 
 * @export
 * @param {any} arr 
 * @returns boolean
 */
export function arrayIsEmpty(arr){
  return arr === undefined || arr.length == 0;
}

/**
 * Removes duplicates from an array
 * 
 * @export
 * @param {any} arr 
 * @returns de-duplicated array
 */
export function deDuplicate(arr) {
  let hashTable = {};

  return arr.filter(function (el) {
    let key = JSON.stringify(el);
    let match = Boolean(hashTable[key]);

    return (match ? false : hashTable[key] = true);
  });
}