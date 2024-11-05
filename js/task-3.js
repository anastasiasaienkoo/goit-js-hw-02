function checkForSpam(message) {
  const checkMessage = message.toLowerCase();
  if (checkMessage.includes("sale") || checkMessage.includes("spam")) {
    return("true");
  } else {
    return("false");
  }

}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
