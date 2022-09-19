/* 
Your online store likes to give out coupons for special occasions. Some customers try to cheat 
the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as 
strings in this format: "MONTH DATE, YEAR".

*/
// P: Takes in 4 parameters, two strings, and two dates
// R: Returns a boolean
// E:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  === false
// checkCoupon('123','123','September 5, 2014','October 1, 2014') === true
// checkCoupon('123a','123','September 5, 2014','October 1, 2014') === false
// P:

function checkCoupon(enteredCode, correctCode, currentDate, expiredDate) {
  // if eneteredCode === correctCode
  // && currentDate <= expiredDate

  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expiredDate)
  );
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014"));
