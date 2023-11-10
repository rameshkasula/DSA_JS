function isPalindrome(str) {
  const checkedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return checkedStr === checkedStr.split("").reverse().join("");
}

const result = isPalindrome("Not a palindrome");

if (result) {
  console.log("The string is a palindrome");
} else {
  console.log("The string is not a palindrome");
}
