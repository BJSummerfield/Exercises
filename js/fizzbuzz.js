function fizzBuzz(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    console.log('fizzBuzz');
  } else if (number % 5 === 0) {
    console.log('buzz');
  } else if (number % 3 === 0) {
    console.log('fizz');
  }
}

fizzBuzz(30);