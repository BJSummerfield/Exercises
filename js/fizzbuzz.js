// function fizzBuzz(number) {
//   if (number % 5 === 0 && number % 3 === 0) {
//     console.log('fizzBuzz');
//   } else if (number % 5 === 0) {
//     console.log('buzz');
//   } else if (number % 3 === 0) {
//     console.log('fizz');
//   }
// }

// fizzBuzz(30);

// function findOdd(A) {
//   var freq = A.reduce(
//     (x, y) => ({ ...x, [y]: (x[y] || 0) + 1 }), 
//     {});
//   var oddFreq = Object.keys(freq).filter(x => freq[x] % 2);
//   console.log(parseInt(oddFreq[0]));
// }

// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  var r;
  r = cc.split("");
  r = r.reverse();
  for (var i = 0; i < r.length; i++) {
    if (i >= 4) {
      r[i] = '#';
    }
  }
  cc = r.reverse();
  return cc.join("");
}
maskify('hello')