const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total_aprovados = 0;
let total_reprovados = 0;
let total_alunos = 0;

function lerAluno() {
  rl.question("Matrícula (9999 para sair): ", (res_mat) => {
    let matricula = parseInt(res_mat);

    if (matricula === 9999) {
      console.log("Total de alunos:", total_alunos);
      console.log("Total de aprovados:", total_aprovados);
      console.log("Total de reprovados:", total_reprovados);
      rl.close();
      return;
    }

    rl.question("Nota 1: ", (res_n1) => {
      rl.question("Nota 2: ", (res_n2) => {
        rl.question("Nota 3: ", (res_n3) => {
          let nota1 = parseFloat(res_n1);
          let nota2 = parseFloat(res_n2);
          let nota3 = parseFloat(res_n3);

          let media_final = (2 * nota1 + 3 * nota2 + 4 * nota3) / 9;
          media_final = parseFloat(media_final.toFixed(2)); // 2 casas decimais

          total_alunos++;

          if (media_final >= 5) {
            console.log(
              `Matrícula: ${matricula}, Média Final: ${media_final} - APROVADO`
            );
            total_aprovados++;
          } else {
            console.log(
              `Matrícula: ${matricula}, Média Final: ${media_final} - REPROVADO`
            );
            total_reprovados++;
          }

          lerAluno(); // repete para o próximo aluno
        });
      });
    });
  });
}

lerAluno();
