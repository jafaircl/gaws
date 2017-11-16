import { logError } from './errors'

// Type checking
export function getType(elem) {
  return Object.prototype.toString.call(elem).slice(8, -1);
}

export function isArray(elem) {
  return getType(elem) === 'Array';
}

export function isObject(elem) {
  return getType(elem) === 'Object';
}

export function isString(elem) {
  return getType(elem) === 'String';
}

export function isDate(elem) {
  return getType(elem) === 'Date';
}

export function isNumber(elem) {
  return getType(elem) === 'Number';
}

export function isFunction(elem) {
  return getType(elem) === 'Function';
}

export function isRegExp(elem) {
  return getType(elem) === 'RegExp';
}

export function isBoolean(elem) {
  return getType(elem) === 'Boolean';
}

export function isNull(elem) {
  return getType(elem) === 'Null';
}

export function isUndefined(elem) {
  return getType(elem) === 'Undefined';
}

export function isEmpty(elem) {
  return elem === '';
}

export function checkType(elem, isType, message) {
  return isType(elem) ? elem : logError(`Expected ${isType.name.slice(2)} but received ${getType(elem)} ${message}`);
}