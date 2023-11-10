function findPairNumbers(nums, target) {
  const pairNumbers = [];

  for (const num of nums) {
    let diff = target - num;

    if (nums.includes(diff)) {
      pairNumbers.push([num, diff]);
    }
  }

  return pairNumbers;
}

const sample = findPairNumbers([1, 2, 3, 4, 5, 6], 6);

console.log(sample);
