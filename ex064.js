const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularConta() {
  readline.question("nome do cliente: ", (nome) => {
    readline.question("número de diárias: ", (diarias) => {
      diarias = Number(diarias);
      let diaria = 50;
      let taxa = 0;

      if (diarias < 15) {
        taxa = 4.0;
      } else if (diarias === 15) {
        taxa = 3.6;
      } else {
        taxa = 3.0;
      }

      let total = (diaria + taxa) * diarias;

      console.log(`\ncliente: ${nome}`);
      console.log(`total da conta: R$ ${total.toFixed(2)}`);

      readline.close();
    });
  });
}

calcularConta();