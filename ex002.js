const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite o primeiro valor inteiro: ", (v1) => {
  rl.question("digite o segundo valor inteiro: ", (v2) => {
    rl.question("digite o terceiro valor inteiro: ", (v3) => {
      let valor1 = Number(v1);
      let valor2 = Number(v2);
      let valor3 = Number(v3);

      let media = (valor1 + valor2 + valor3) / 3;

      console.log("a media dos valores e: " + media.toFixed(1));

      rl.close();
    });
  });
});
