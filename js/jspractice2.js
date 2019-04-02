// 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).
function reverse(string) {
  var reversestring = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversestring += string[i];
  } 
  console.log(reversestring);
}
reverse("hellow");
 

// 2. Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

function letters(string) {
  var a = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      a += 1;
    }
  }
  console.log(a);
}
letters("happy day");



// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

function index(array, number) {
  var x = 'nil';
  for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
      x = i;
    }
  }
  console.log(x);
}
index([1,2,3],4);
// 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

function sort(array, number) {
  for ( var i = 0; i < array.length; i++) {
    if (array[i] >= number) {break;
    }
  }
  array.splice(i, 0, number);
  console.log(array);
}
sort([1,2,4,5,], 3);

// 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

function highLow(array, number) {
  var x = Math.floor(array.length / 2);
  if (number > array[x]) {
    console.log('higher');
  } else {
    console.log('lower');
  }
}
highLow([1,2,3,4,5,6,7,8,9,10],2);


var x = "Hello World";
(x.includes('H')) ? console.log('true') : console.log('false');