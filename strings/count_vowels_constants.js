// count vowels and constants

function countVowelsConstants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let countVowels = 0;
  let countConstants = 0;
  if (!str || str.length === 0) {
    return 0;
  }

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      countVowels++;
    } else {
      countConstants++;
    }
  }

  return [countVowels, countConstants];
}

const result = countVowelsConstants("hello");

console.log(result);
