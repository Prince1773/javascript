const PrimeNums = (first, last) => {
  let arr = [];
  for (let i = first; i <= last; i++) {
    arr.push(i);
  }
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  let allPrime = arr.filter(isPrime);
  return allPrime.reduce((acc, cur) => acc + cur);
};
console.log(PrimeNums(2, 15));
