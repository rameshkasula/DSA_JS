// find the maximum number in array

const myArr = [100, 4, 5, 3, 6, 2, 88, 99, 657, 789, 879];

function findMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (max < num) {
      max = num;
    } else {
      max = max;
    }
  }

  return max;
}

const big = findMax(myArr);

console.log("big number", big);
