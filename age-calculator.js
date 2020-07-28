// a function that determines someone's age, given their date of birth

const ageCalculator = function (name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;

  if (age === 1) {
    return name + " is " + age + " year old."
  } else {
    return name + " is " + age + " years old."
  }

}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));