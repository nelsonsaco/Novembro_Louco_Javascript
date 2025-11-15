const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("digite uma palavra ou frase: ", (texto) => {
  let resultado = "*".repeat(texto.length);
  console.log(resultado);
  readline.close();
});