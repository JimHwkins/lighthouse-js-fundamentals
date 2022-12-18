const ageCalculator = function (name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  let text = `${name} is ${age} years old`;
  return text;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));