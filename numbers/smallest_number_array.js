// find smallest number in array

function smallest(nums) {
  let min = nums[0];
  for (const num of nums) {
    if (num < min) {
      min = num;
    } else {
      min = min;
    }
  }

  return min;
}

const result = smallest([1, 2, 3, 4, 5, -5]);
console.log(result);
