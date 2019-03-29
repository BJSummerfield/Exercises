// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 
function printEveryNumber() {
  var index = 1;
  while (index <= 100) {
    console.log(index);
    index += 1;
  }
}
printEveryNumber();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function printEveryOtherNumber() {
  var index = 1;
  while (index <= 100) {
    console.log(index);
    index += 2;
  }
}
printEveryOtherNumber();


// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function countFiftyFives(array) {
  var count = 0;
  array.forEach(function(item) {
    if (item === 55) {
      count++;
    }
  });
  console.log(count);
}
countFiftyFives([1,2,55,55,6,7]);


// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
function joinAwsomesauce(array) {
  var newarray = [];
  for (var i = 0; i < array.length; i++) {
    newarray.push(array[i]);
    if (array[i] !== array[array.length - 1]) {
      newarray.push("awsomesauce");
    }
  }
  console.log(newarray);
}
joinAwsomesauce(["a", "b", "c", "d", "e"]);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}
var itemamounts = {chair: 5, table: 2};
itemamounts["chair"] = 3;
console.log(itemamounts);


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}
var items = {chair: 5, tabel: 2};
items["desk"] = 7;
console.log(items);

// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function printFactorial(number) {
  var answer = 1;
  while (number > 0) {
    answer *= number;
    number -= 1;
  }
  console.log(answer);
}
printFactorial(5);

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
function arrayMash(array1, array2) {
  array1.forEach(function(number) {
    array2.forEach(function(number2) {
      console.log(number + number2);
    });
  });
}
arrayMash([1,5,10],[100,500,1000]);

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

function largestNumber(array) {
  array = array.sort(function(a, b) {
    return a - b;
  });
  console.log(array[array.length - 1]);
}
largestNumber([5,4,8,1,2]);

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

function everyOtherString(array) {
  var i = 0;
  var newarray = [];
  while (i < array.length) {
    newarray.push(array[i]);
    i += 2;
  }
  console.log(newarray);
}
everyOtherString(["a", "b", "c", "d", "e", "f"]);