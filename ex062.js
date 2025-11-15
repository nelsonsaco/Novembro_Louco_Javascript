let produto = 1;

for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    produto *= i;
  }
}

console.log("O produto dos inteiros ímpares de 1 a 15 é:", produto);