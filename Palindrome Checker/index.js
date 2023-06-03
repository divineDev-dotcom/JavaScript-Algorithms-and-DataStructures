function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the string
  var reversedStr = alphanumericStr.split('').reverse().join('');
  
  // Check if the original and reversed strings are the same
  return alphanumericStr === reversedStr;
}

console.log(palindrome("eye"));  // Output: true