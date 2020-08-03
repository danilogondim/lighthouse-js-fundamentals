// a function that receives three arrays of 2 values each and counts between
// the given range checking for each number if it is multiple of the
// passed numbers and print a value according with the following:
// multiple of both numbers (print the concatenation of both words),
// multiple of the first number (print the first word),
// multiple of the second number (print the second word),
// or none of the previous options (print the number itself)

const loopyLighthouse = function (range, multiples, words) {
  for (let n = range[0]; n <= range[1]; n++) {
    if (n % multiples[0] === 0 && n % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (n % multiples[0] === 0) {
      console.log(words[0]);
    } else if (n % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(n);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);