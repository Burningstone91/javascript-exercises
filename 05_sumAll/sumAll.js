const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  // Use Gauss Formula n * (n + 1) / 2 instead of a loop
  return (max * (max + 1) / 2) - ((min - 1 ) * (min) / 2);
};

// Do not edit below this line
module.exports = sumAll;
