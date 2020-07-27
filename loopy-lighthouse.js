// count from 100 to 200, inclusive, checking whether the number is a multiple of both 3 and 4,
// a multiple of 3, a multiple of 4, or none of the previous options
for (let n = 100; n <= 200; n++) {
  if (n % 3 === 0 && n % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (n % 3 === 0) {
    console.log("Loopy");
  } else if (n % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(n);
  }
}