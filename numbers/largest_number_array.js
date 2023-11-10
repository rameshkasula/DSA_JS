// largest number in array

function largest(nums) {
  let max = 0;

  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

const result = largest([1, 2, 3, 4, 5, -8, 6, 7, 8, 9, 10]);

console.log(result);
