// remove duplicates

function removeDuplicates(nums) {
  let duplicates = [];

  for (const num of nums) {
    if (!duplicates.includes(num)) {
      duplicates.push(num);
    }
  }

  //   const arr = nums.filter((item, index) => {
  //     return nums.indexOf(item) === index;
  //   });
  // return arr;
  return duplicates;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
