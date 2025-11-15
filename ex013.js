const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome completo: ", (nome) => {
  const palavras = nome.trim().split(" ");
  let abreviatura = "";

  for (let palavra of palavras) {
    if (palavra.length <= 2) {
      abreviatura += palavra + " ";
    } else {
      abreviatura += palavra[0].toUpperCase() + ". ";
    }
  }

  console.log("Abreviatura:", abreviatura.trim());
  rl.close();
});
