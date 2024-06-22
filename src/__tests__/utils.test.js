// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for palindrome words", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("a")).toBe(true);
  });

  it("returns false for non-palindrome words", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("testing")).toBe(false);
  });

  it("handles words with uppercase and lowercase letters", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("Madam")).toBe(true);
    expect(isPalindrome("Noon")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("12321")).toThrow();
    expect(() => isPalindrome("12abba21")).toThrow();
  });

  it("throws an error for input that isn't a string", () => {
    expect(() => isPalindrome(12321)).toThrow();
    expect(() => isPalindrome(true)).toThrow();
  });
});
