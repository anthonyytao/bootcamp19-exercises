const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  const arr = str.split(' ');
  console.log(arr);
};

tokenize("hello my name is anthony");

const reverse = str => {
  // TODO - write a function which reverses the string
  let reverse = "";
  for (let i = str.length - 1; i>=0; i--) {
    reverse += str[i];
  }
  console.log(reverse);
  return reverse;
};

reverse("abc");

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  const findUnique = function(item, pos, self) {
    return self.indexOf(item) === pos;
  }
  const uniqueArray = arr.filter(findUnique);
  console.log(uniqueArray);
  return uniqueArray;
};

const a = [1,2,3,4,1,2];
uniqueOnes(a);

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if (num === 0) {
    return 1;
  }
  else {
    return(num * factorial(num-1));
  }
};

console.log(factorial(3));

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length !== arr2.length) {
    return -1;
  }
  else {
    finalArray = [];
    for (let i = 0; i < arr1.length; i++) {
      newArray = [];
      newArray.push(arr1[i]);
      newArray.push(arr2[i]);
      finalArray.push(newArray);
    }
    return finalArray;
  }
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert(reverse("3df") === "fd3");
assert(factorial(3) === 6);
