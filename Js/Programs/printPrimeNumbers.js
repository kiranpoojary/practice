function getPrimeNumbers(n) {
  count = 0;
  for (let i = 2; count < n; i++) {
    if (isPrime(i)) {
      console.log(i + " ");
      ++count;
    }
  }
}

function isPrime(num) {
  let isPrime = true;
  let maxCheck = Math.ceil(num / 2);
  if (num == 1) isPrime = false;
  for (let i = 2; i <= maxCheck; i++) {
    if (num % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

getPrimeNumbers(5);
