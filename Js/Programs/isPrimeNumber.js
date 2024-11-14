function isPrimeNumber(num) {
  let maxCheck = Math.ceil(num / 2);
  let isPrime = true;
  if (num == 1) return false;
  for (i = 2; i <= maxCheck; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

console.log({ isPrimeNumber: isPrimeNumber(13) });
