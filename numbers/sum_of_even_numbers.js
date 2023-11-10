// sum of even numbers in array

// using for loop
function sumEven(nums) {
  let first = 0;
  for (const num of nums) {
    if (num % 2 === 0) {
      first += num;
    }
  }

  return first;
}

const result = sumEven([1, 2, 3, 5, 6, 8, 9, 10]);
console.log(result);
