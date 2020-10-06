function checkForSpam(str) {
  // Write code under this line
  const checking = str.toLowerCase();

  return checking.includes("spam") || checking.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
