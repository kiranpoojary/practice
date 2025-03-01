function getNumberInWords(num) {
  const start20 = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
    "Hundred",
  ];
  let str;
  if (num < 20) str = start20[num];
  else if (num <= 100) {
    str = tens[Math.floor(num / 10)];
    num = num % 10;
    while (num > 0) {
      let rem = Math.floor(num % 10);
      str += ` ${start20[rem]}`;
      num = Math.floor(num / 10);
    }
  }
  return str;
}

console.log(getNumberInWords(38));
