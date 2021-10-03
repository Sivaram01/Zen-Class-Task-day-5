//task-day 5
//Do the below programs in anonymous function & IIFE

//(Q-1) Print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let evenNumbers = numbers.filter(function(n) {
   return (n % 2 != 0);
});
console.log(evenNumbers);

//(Q-2)Convert all the strings to title caps in a string array
 let str = "guvi geeks zen class" 
let titleCase = function(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}
console.log(titleCase(str));

//(Q-3) Sum of all numbers in an array
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 
let total = function(num){
  return num.reduce((sum , val) => sum +val , 0)
}
console.log(total(num))

//(Q-4)Return all the prime numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let Prime = function(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(Prime));

//(Q-5)Return all the palindromes in an array
 let palindromes = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'] 
let checkPalindrom = function(str) { 
  return str == str.split('').reverse().join('');
}
const result = palindromes.filter(pal => checkPalindrom(pal));
console.log(result);

//(Q-6)Return median of two sorted arrays of same size
function bruteForce(nums1 = [], nums2 = []) {
  const mergedNums = [...nums1, ...nums2].sort((a, b) => a - b);
  const midPoint = Math.floor(mergedNums.length / 2);

  return mergedNums.length % 2 !== 0
    ? mergedNums[midPoint]
    : (mergedNums[midPoint - 1] + mergedNums[midPoint]) / 2;
}

//(Q-7) Return median of two sorted arrays of same size
// merge sort
// complexity O(n + m)
function findMedianSortedArrays(nums1 = [], nums2 = []) {
  let i1 = 0;
  let i2 = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;

  if (len === 0) {
    return null;
  }

  const merged = [];

  while (i1 < len1 && i2 < len2) {
    if (nums1[i1] <= nums2[i2]) {
      merged.push(nums1[i1++]);
    } else {
      merged.push(nums2[i2++]);
    }
  }

  while (i1 < len1) {
    merged.push(nums1[i1++]);
  }
  while (i2 < len2) {
    merged.push(nums2[i2++]);
  }

  const isOdd = len % 2;
  if (isOdd) {
    return merged[(len - 1) / 2];
  } else {
    return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
  }
}

const nums1 = [1,3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2))


//(Q-8)Remove duplicates from an array

var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']
var uniq = names
  .map((name) => {
    return {count: 1, name: name}
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})

var sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b])

console.log(sorted)

//(Q-9)Rotate an array by k times

let arrayRotate = function (arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}
console.log(arrayRotate([1, 2, 3, 4, 5]));       // [2, 3, 4, 5, 1];
console.log(arrayRotate([1, 2, 3, 4, 5], true));


//Do the below programs in arrow functions....
//(Q-1) Print odd numbers in an array
console.log(numbers.filter((odd) => odd % 2 !=0));

//(Q-2)Convert all the strings to title caps in a string array
let stringfy = "guvi geeks zen class" 
let upperCase = (str) => { //arrow function
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}
console.log(upperCase(stringfy));

//(Q-3) Sum of all numbers in an array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let totals = (nums) => {
  return nums.reduce((sum , val) => sum +val , 0)
}
console.log(totals(nums))

//(Q-4)Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}); 
console.log(myPrimeArray);


//(Q-5)Return all the palindromes in an array
let palindrom = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'] 
let checkPalindrome = (str) => { 
  return str == str.split('').reverse().join('');
}
const results = palindrom.filter(pal => checkPalindrome(pal));
console.log(result);