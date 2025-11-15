const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite o primeiro valor: ", (v1) => {
  rl.question("digite o segundo valor: ", (v2) => {
    rl.question("digite o terceiro valor: ", (v3) => {
      let a = Number(v1);
      let b = Number(v2);
      let c = Number(v3);

      let maior = Math.max(a, b, c);
      let menor = Math.min(a, b, c);
      let intermediario = a + b + c - maior - menor;

      console.log("maior valor: " + maior);
      console.log("valor intermediario: " + intermediario);
      console.log("menor valor: " + menor);

      rl.close();
    });
  });
});
