const removeFromArray = function(array, ...remove) {
  cleanedArray = [];

  array.forEach((element) => { 
    if (!remove.includes(element)) {
      cleanedArray.push(element);
    }
  })

  return cleanedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
