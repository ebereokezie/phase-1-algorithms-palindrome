function isPalindrome(word) {
  let reverseWord = word.split("").reverse().join("")
  
  return word === reverseWord

}

/* 
  Add your pseudocode here
*/

/*
  1) Split the word into letters in array
  2) Use .reverse() to reverse the letters
  3) join the reverse letters to create reverse word
  4) If loop (if "string" hard equals reverse, return "true", else return false)
*/
isPalindrome("word")
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
