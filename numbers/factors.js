// factors of num

function factor(num) {
  let factors = [];

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

const sample = factor(9);

console.log(sample);
