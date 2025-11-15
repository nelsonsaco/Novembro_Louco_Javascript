let totalMult5 = 0;
const limite = 10000;

for (let i = 1; i <= limite; i++) {
  if (i % 5 === 0) {
    totalMult5++;
  }
}

const percentual = (totalMult5 / limite) * 100;

console.log("Quantidade de múltiplos de 5:", totalMult5);
console.log("Percentual de múltiplos de 5:", percentual.toFixed(2) + "%");