function telephoneCheck(str) {
  // Regular expression to match valid US phone number formats
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
  
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));  // Output: true