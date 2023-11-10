// find all perfect squares

function findPerfectSquares(num) {
  let squares = [];

  for (const num of nums) {
    const square = Math.sqrt(num);

    if (square % 1 === 0) {
      squares.push(num);
    }
  }
}
