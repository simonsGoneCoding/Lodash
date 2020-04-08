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
  }
};

// Do not write or modify code below this line.
module.exports = _;
