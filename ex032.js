let total = 0;
let graos = 1;

for (let i = 1; i <= 64; i++) {
  total += graos;
  graos *= 2;
}

console.log(`O total de grãos é: ${total}`);
