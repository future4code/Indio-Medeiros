function checkAnagram(word1, word2) {
    return word1.split("").sort().join("") === word2.split("").sort().join("");
}
var result4 = checkAnagram("anagrama", "nagarama");
console.log(result4);
