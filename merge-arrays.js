// function that, when given two sorted arrays containing numbers,
// returns a sorted array of the numbers from both lists

const merge = function (first, second) {
  const totalLen = first.length + second.length;
  const newArray = [];
  let firstIndex = 0;
  let secondIndex = 0;
  while (newArray.length < totalLen) {
    if (first[firstIndex] <= second[secondIndex] || secondIndex === second.length || (first[firstIndex] !== undefined && first[firstIndex] === newArray[newArray.length - 1])) {
      newArray.push(first[firstIndex]);
      firstIndex++;
    } else {
      newArray.push(second[secondIndex]);
      secondIndex++;
    }
  }
  return newArray;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
console.log(merge([], [4, 5, 6]), "=?", [4, 5, 6]);