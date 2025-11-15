for (let a = 2; a <= 100000; a++) {
  let somaA = 0;

  for (let i = 1; i < a; i++) {
    if (a % i === 0) somaA += i;
  }

  let b = somaA;
  let somaB = 0;

  for (let j = 1; j < b; j++) {
    if (b % j === 0) somaB += j;
  }

  if (a === somaB && a !== b && a < b) {
    console.log(`(${a}, ${b}) são números amigáveis`);
  }
}
