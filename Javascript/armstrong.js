function solve(...args) {

  const num = args[0];

  let originalNum = num;
  let digits = num.toString().split("");
  let power = digits.length;
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), power);
  }

  let result = (sum === originalNum)
    ? `${originalNum} is an Armstrong number`
    : `${originalNum} is not an Armstrong number`;

  return result;
}