// prime numbers

function PrimeNumbers(nums) {
  let primes = [];

  for (const num of nums) {
    if (num > 1 && num % 2 !== 0) {
      primes.push(num);
    }
  }

  return primes;
}

const result = PrimeNumbers([1, 2, 4, 5, 6, 7, 8, 9, 44, 101]);

console.log(result);
