let termo = 3;
let soma = 0;

while (termo <= 6561) {
  soma += termo;
  termo *= 3;
}

console.log(`soma dos termos da progressão geométrica: ${soma}`);
