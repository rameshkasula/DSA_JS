//  average of numbers

function average(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  return sum / nums.length;
}

const result = average([1, 2, 3, 4, 5]);
console.log(result);
