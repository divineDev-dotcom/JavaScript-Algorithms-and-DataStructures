function rot13(str) {
  var decodedStr = '';
  
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 90) {
      // Shift the letter by 13 places in the alphabet
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decodedStr += String.fromCharCode(decodedCharCode);
    } else {
      // Pass non-alphabetic characters as they are
      decodedStr += str[i];
    }
  }
  
  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));  // Output: "FREE CODE CAMP"