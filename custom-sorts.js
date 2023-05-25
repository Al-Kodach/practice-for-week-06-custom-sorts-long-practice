// Given an array of User objects, sort them in ascending order based on their age.
// Returns the objects in sorted order.
function ageSort(users) {
  // Your code here
  users.sort((a, b) => a.age - b.age);
  return users;
}

// Given an array, sort it such that the odds appear in ascending order on the left,
// then the evens on the right. (Remember, try to do this in-place!)
function oddEvenSort(arr) {
  // Your code here

  arr.sort((a, b) => {

    if (a % 2 === 0 && b % 2 !== 0) {
      return 1;
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return -1;
    } else {
      return a - b;
    }
  });

 return arr;
}

// Given two strings, s and t, write a function that determines if s and t are anagrams.
function validAnagrams(s, t) {
  // Your code here
  if (s.length !== t.length) return false;

  const sChars = s.toLowerCase().split('');
  const tChars = t.toLowerCase().split('');

  sChars.sort();
  tChars.sort();

  sChars.forEach((el, i) => {
    if (el !== tChars[i]) {
      return false;
    }
  })

  return true;
}

// Given an array, sort it such that the numbers are grouped by its base in descending order,
// but ascending within each group.
function reverseBaseSort(arr) {
  // Your code here

  arr.sort((a, b) => {
    aStr = a.toString();
    bStr = b.toString();

    if (aStr.length === bStr.length) {
      return a - b;
    } else {
      return bStr.length - aStr.length;
    }
  });

  return arr;
}

// Given an array of integers, sort the array in increasing order based on the frequency of the values.
// If multiple values have the same frequency, sort them in decreasing order. Return the sorted array.
function frequencySort(arr) {
  // Your code here

  let frequency = ( target => arr.filter(val => val === target).length );

  arr.sort((a, b) => {
    let aFreq = frequency(a);
    let bFreq = frequency(b);

    if (aFreq !== bFreq) {
      return aFreq - bFreq;
    } else {
      return b - a;
    }
  });

  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];