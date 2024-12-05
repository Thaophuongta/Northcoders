const { check, runTest } = require("../../../test-api");

function removeDuplicateValues(arr) {
  let newArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    newArray.includes(arr[i]) || newArray.push(arr[i]);
  }
  return newArray;
}

runTest("removeDuplicateValues() should return an array", function () {
  check(Array.isArray(removeDuplicateValues([]))).isEqualTo(true);
});
runTest("removeDuplicateValues() should leave array with no duplicates the same", function () {
  check(removeDuplicateValues([1, 2, 3])).isEqualTo([1, 2, 3]);
});
runTest("removeDuplicateValues() should remove duplicate values", function () {
  check(removeDuplicateValues([1, 1, 3])).isEqualTo([1, 3]);
  check(removeDuplicateValues([1, 3, 13, 1])).isEqualTo([1, 3, 13]);
  check(removeDuplicateValues([1, 1, 1])).isEqualTo([1]);
});

module.exports = removeDuplicateValues;