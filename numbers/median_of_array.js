// median

// [2,3,4] => 3
// [2,3,4,5] => 3.5
function median(nums) {
  if (nums.length % 2 === 0) {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  } else {
    return nums[Math.floor(nums.length / 2)];
  }
}

const result = median([2, 3, 4, 5]);

console.log(result);
