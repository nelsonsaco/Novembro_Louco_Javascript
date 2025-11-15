const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite a operacao (+, -, *, /): ", (op) => {
  rl.question("digite o primeiro numero: ", (n1) => {
    rl.question("digite o segundo numero: ", (n2) => {
      let num1 = Number(n1);
      let num2 = Number(n2);
      let resultado;

      if (op === "+") {
        resultado = num1 + num2;
      } else if (op === "-") {
        resultado = num1 - num2;
      } else if (op === "*") {
        resultado = num1 * num2;
      } else if (op === "/") {
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          console.log("erro: divisao por zero");
          rl.close();
          return;
        }
      } else {
        console.log("operacao invalida");
        rl.close();
        return;
      }

      console.log("resultado: " + resultado);
      rl.close();
    });
  });
});
