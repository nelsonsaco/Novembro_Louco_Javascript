const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Montar a tabuada de: ", (numStr) => {
  const numero = Number(numStr);
  rl.question("Começar por: ", (inicioStr) => {
    const inicio = Number(inicioStr);
    rl.question("Terminar em: ", (fimStr) => {
      const fim = Number(fimStr);

      if (fim < inicio) {
        console.log("Erro: o valor final não pode ser menor que o inicial.");
      } else {
        console.log(
          `Vou montar a tabuada de ${numero} começando em ${inicio} e terminando em ${fim}:`
        );
        for (let i = inicio; i <= fim; i++) {
          console.log(`${numero} X ${i} = ${numero * i}`);
        }
      }

      rl.close();
    });
  });
});
