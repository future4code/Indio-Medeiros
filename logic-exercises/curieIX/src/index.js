function detectPrefixBetweenStrings(arrayString) {
    var letter = "";
    var prefix = "";
    if (arrayString.length === 0) {
        return "";
    }
    for (var i = 0; i < arrayString[0].length; i++) {
        letter = arrayString[0][i];
        for (var j = 1; j < arrayString.length; j++) {
            if (arrayString[j][i] !== letter) {
                return prefix;
            }
        }
        if (letter) {
            prefix += letter;
        }
    }
    return prefix;
}
var result = detectPrefixBetweenStrings(["coracao", "cor", "corona", "coreia"]);
console.log("final", result);
