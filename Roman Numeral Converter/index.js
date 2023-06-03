function convertToRoman(num) {
  var romanNumeral = '';
  
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeralSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  // Iterate through the decimal values
  for (var i = 0; i < decimalValue.length; i++) {
    // Append the corresponding Roman numeral symbols while reducing the decimal value
    while (decimalValue[i] <= num) {
      romanNumeral += romanNumeralSymbols[i];
      num -= decimalValue[i];
    }
  }
  
  return romanNumeral;
}

console.log(convertToRoman(36));  // Output: XXXVI