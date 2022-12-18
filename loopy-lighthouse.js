let number = 0;
for (let i = 100; i <= 200; i++) {
  number = i;
  if (number % 3 === 0 && number % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (number % 4 === 0) {
    console.log('Lighthouse');
  } else if (number % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(number);
  }
}