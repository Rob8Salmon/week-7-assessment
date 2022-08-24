// 1. Sum zero

const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1 + 1; j < arr.length; j++) {
        if (!(arr[i] + arr[j])) {
          return true;
        }
      }
    }
  
    return false;
  };
  
  console.log(addToZero([]));
  // -> False
  
  console.log(addToZero([1]));
  // -> False
  
  console.log(addToZero([1, 2, 3]));
  // -> False
  
  console.log(addToZero([1, 2, 3, -2]));
  // -> True
  
  // Time complexity: 0(n^2)
  // space complexity: 0(1)
  
  // 2) Unique Characters
  function hasUniqueChars(word) {
    let uniqueChars = new Set([]);
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i]);
    }
    return uniqueChars.size === word.length;
  }
  
  console.log(hasUniqueChars("Monday"));
  console.log(hasUniqueChars("Moonday"));
  
  // time: 0(log n)
  // space: 0(1)
  
  // 3) Pangram Sentence
  
  const isPangram = (str) => {
    let abcStr = "abcdefghijklmnopqrstuvwxyz";
    let newStr = str.toLowerCase();
  
    for (let i = 0; i < abcStr.length; i++) {
      if (!newStr.includes(abcStr[i])) {
        return false;
      }
    }
  
    return true;
  };
  
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
  console.log(isPangram("I like cats, but not mice"));
  
  // Time: O(log n)
  // space: O(1)
  
  isPangram("The quick brown fox jumps over the lazy dog!");
  // -> True
  
  isPangram("I like cats, but not mice");
  // -> False
  
  // 4) Longest Word
    //   Don't understand this one
  
  console.log(findLongestWord(["hi", "hello"]));
  
  // time: 0(1);
  // space: 0(1);