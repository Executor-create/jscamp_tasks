// task 1
function getDifference(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(max - min);
}

//task 2
function getLongWords(str, num) {
  return str.split(' ').filter(word => word.length > num);
}

//task 3
function checkEnding(str, target) {
  if (str.endsWith(target))
    return true;

  return false
}

checkEnding('Bastian', 'ian');

//task 4
function averages(arr) {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push((arr[i] + arr[i + 1]) / 2);
  }

  return result;
}

//task 5
function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

//task 6
function findUniqueElements(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

//task 7
function reverseObject(obj) {
  const reversed = {};
  for (let key in obj) {
    reversed[obj[key]] = key;
  }
  return reversed;
}

const myObj = {
  a: 'one',
  b: 'two',
  c: 'three'
};

//task 8
function calculateDifference(items, policyLimit) {
  const itemsValue = Object.values(items).reduce((a, b) => a + b);
  return itemsValue - policyLimit;
}

//task 9
function checkBrick(a, b, c, w, h) {
  return a <= h && b <= w && c <= w;
}

//task 10
let fullName = 'c:\\WebServers\\home\\testsite\\www\\myfile.txt';
let fileName = fullName.split('\\').pop().split('.')[0];
console.log(fileName);

//task 11
let str1 = 'abcde';
let str2 = 'cdeab';

function isCyclicRotation(str1, str2) {
  return str1.length === str2.length && (str2 + str2).includes(str1);
}

console.log(isCyclicRotation(str1, str2));

//task 12
function getArrays(a) {
  let b = [];
  let c = [];
  let min, max;

  for (let i = 0; i < a.length / 2; i++) {
    min = Math.min(...a);
    max = Math.max(...a);
    b.push(min);
    c.push(max);
    a.splice(a.indexOf(min), 1);
    a.splice(a.indexOf(max), 1);
  }

  return [b, c];
}

let a = [1, 3, 5, 7, 9, 8, 6, 4, 2];