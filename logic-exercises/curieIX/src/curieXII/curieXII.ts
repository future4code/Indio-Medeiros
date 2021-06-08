function checkAnagram (word1: string, word2:string) {
  
    return word1.split("").sort().join("") === word2.split("").sort().join("")
}

const result4: boolean = checkAnagram("anagrama", "nagarama")
console.log(result4)