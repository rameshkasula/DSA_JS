// mode of array

function mode(nums) {
  let freq = {};
  for (const num of nums) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  let max = 0;
  let repeated = null;

  for (const num in freq) {
    if (freq[num] > max) {
      max = freq[num];
      repeated = num;
    }
  }

  return repeated;
}

const result = mode([1, 2, 3, 5, 6, 4, 3, 5, 4, 6, 3, 4, 4, 2]);

console.log(result);
