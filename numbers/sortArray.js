function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap the elements.
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const array = [5, 2, 6, 8, 4, 1, 7, 3, 0];
const sortedArray = sortArray(array);
console.log(sortedArray);
