const nums = [1, 2, 3, 4, 5, 7, 8, 9, 7, 4, 6, 3, 7, 3, 62, 7, 8, 2, 99];
function freqNums(arr) {
  let freq = {};

  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  return freq;
}

const free = freqNums(nums);

console.log("free", free);
