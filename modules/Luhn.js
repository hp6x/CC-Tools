(function(){
  if (!window.CardCheckModules) {
    window.CardCheckModules = {};
  }
  function validateLuhn(cardNumber) {
    if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 19) return false;
    const digits = cardNumber.split('').map(Number);
    let sum = 0, isEven = false;
    for (let i = digits.length - 1; i >= 0; i--) {
      let d = digits[i];
      if (isEven) {
        d *= 2;
        if (d > 9) d -= 9;
      }
      sum += d;
      isEven = !isEven;
    }
    return sum % 10 === 0;
  }
  window.CardCheckModules.Luhn = {
    name: 'Luhn',
    validate: validateLuhn
  };
})();
