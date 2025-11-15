const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalAlunos = 0;
let menos10 = 0;
let entre10e15 = 0;
let acima15 = 0;

function lerAluno() {
  rl.question(
    "Digite o número de vezes que o aluno usou o restaurante (9999 para terminar): ",
    (numstr) => {
      const num = parseInt(numstr);

      if (num === 9999) {
        if (totalAlunos === 0) {
          console.log("nenhum dado foi inserido");
        } else {
          console.log(
            `\npercentual < 10: ${((menos10 / totalAlunos) * 100).toFixed(2)}%`
          );
          console.log(
            `percentual 10-15: ${((entre10e15 / totalAlunos) * 100).toFixed(
              2
            )}%`
          );
          console.log(
            `percentual > 15: ${((acima15 / totalAlunos) * 100).toFixed(2)}%`
          );
        }
        rl.close();
      } else {
        totalAlunos++;
        if (num < 10) menos10++;
        else if (num <= 15) entre10e15++;
        else acima15++;
        lerAluno();
      }
    }
  );
}

lerAluno();
