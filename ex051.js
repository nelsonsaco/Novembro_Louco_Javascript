const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let soma = 0;
let count = 0;
let max = 0;
let min = Infinity;

function ler() {
  rl.question("nome do funcionario (fim para sair): ", (nome) => {
    if (nome.toLowerCase() === "fim") {
      if (count > 0) {
        console.log(`media salario: ${(soma / count).toFixed(2)}`);
        console.log(`salario mais alto: ${max}`);
        console.log(`salario mais baixo: ${min}`);
      } else {
        console.log("nenhum salario informado");
      }
      rl.close();
      return;
    }

    rl.question("salario: ", (sal) => {
      let s = parseFloat(sal);
      soma += s;
      count++;
      if (s > max) max = s;
      if (s < min) min = s;
      ler();
    });
  });
}

ler();
