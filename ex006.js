const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// função que soma os dígitos de uma string
function somaDigitos(str) {
  let soma = 0;
  for (let i = 0; i < str.length; i++) {
    soma += Number(str[i]);
  }
  return soma;
}

rl.question("digite os numeros sem espacos: ", (entrada) => {
  let total = somaDigitos(entrada);
  console.log("soma dos numeros: " + total);
  rl.close();
});
