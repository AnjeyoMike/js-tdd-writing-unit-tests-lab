// Your code here
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only alphabetic characters");
  }

  const reversedWord = word.toLowerCase().split("").reverse().join("");
  return word.toLowerCase() === reversedWord;
}
