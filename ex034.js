const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalalunos = 45;
let alunoatual = 1;

let somaidade_menos170 = 0;
let count_menos170 = 0;

let somaaltura_mais20 = 0;
let count_mais20 = 0;

function leraluno() {
  rl.question(`Aluno ${alunoatual} - Digite a idade: `, (idadeStr) => {
    const idade = parseInt(idadeStr);

    rl.question(
      `Aluno ${alunoatual} - Digite a altura (em metros): `,
      (alturaStr) => {
        const altura = parseFloat(alturaStr);

        if (altura < 1.7) {
          somaidade_menos170 += idade;
          count_menos170++;
        }

        if (idade > 20) {
          somaaltura_mais20 += altura;
          count_mais20++;
        }

        alunoatual++;
        if (alunoatual <= totalalunos) {
          leraluno();
        } else {
          let mediaidade = 0;
          if (count_menos170 > 0) {
            mediaidade = somaidade_menos170 / count_menos170;
          }

          let mediaaltura = 0;
          if (count_mais20 > 0) {
            mediaaltura = somaaltura_mais20 / count_mais20;
          }

          console.log(
            `\nIdade média dos alunos com altura < 1,70m: ${mediaidade.toFixed(
              2
            )} anos`
          );
          console.log(
            `Altura média dos alunos com idade > 20 anos: ${mediaaltura.toFixed(
              2
            )} m`
          );

          rl.close();
        }
      }
    );
  });
}

leraluno();
