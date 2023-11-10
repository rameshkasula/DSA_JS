function freqNums(nums) {
  let freq = {};
  for (let num of nums) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  return freq;
}
const myArr = [1, 2, 3, 4, 5, 7, 8, 9, 7, 4, 6, 3, 7, 3, 62, 7, 8, 2, 99];
const sample = freqNums(myArr);

console.log(sample);

function findDuplicates(arr) {
  const duplicates = [];
  const fun = [];
  for (const element in arr) {
    if (arr[element] > 1) {
      duplicates.push(element);
    } else {
      fun.push(element);
    }
  }
  console.log(fun, "kkkkkkk");
  return duplicates;
}

const duplicatesSample = findDuplicates(sample);

console.log(duplicatesSample);
