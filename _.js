const _ = {
  clamp(number, lower, upper) {
    const lowerClampValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },

  words(string) {
    const word = string.split(" ");
    return word;
  },

  pad(string, length) {
    if (string.length >= length) {
      return string;
    }

    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);

    return paddedString;
  },

  has(object, key) {
    const hasValue = object[key];
    if (typeof hasValue === "undefined") {
      return false;
    } else {
      return true;
    }
  },

  invert(object) {
    let invertedObject = {};

    for (let key in object) {
      const originalValue = object[key];
      invertedObject = { originalValue: key };
    }

    return invertedObject;
  },

  findKey(object, predicate) {
    for (key in object) {
      const value = object[key];
      const predicateReturnedValue = predicate(value);
      if (predicateReturnedValue) {
        return key;
      }
      return undefined;
    }
  },

  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    const droppedArray = array.slice(n, array.length);
    return droppedArray;
  },
};

// Do not write or modify code below this line.
module.exports = _;
