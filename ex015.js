const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite nomes separados por vírgula: ", (entrada) => {
  const nomes = entrada.split(",").map((nome) => nome.trim());
  const nomesOrdenados = nomes.sort();

  console.log("\nLista em ordem alfabética:");
  nomesOrdenados.forEach((nome) => console.log(nome));

  rl.close();
});
