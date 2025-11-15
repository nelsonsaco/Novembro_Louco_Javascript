const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let professores = [];
let somaMasculino = 0;
let contMasculino = 0;
let somaFeminino = 0;
let contFeminino = 0;

function lerProfessor() {
  rl.question(
    "Digite o código do professor (99999 para terminar): ",
    (codigo) => {
      codigo = Number(codigo);
      if (codigo === 99999) {
        console.log("\nListagem de salários:");
        professores.forEach((p) => {
          console.log(
            `Código: ${p.codigo}, Salário bruto: R$${p.salarioBruto.toFixed(
              2
            )}, Salário líquido: R$${p.salarioLiquido.toFixed(2)}`
          );
        });
        if (contMasculino > 0)
          console.log(
            `Média salários masculinos: R$${(
              somaMasculino / contMasculino
            ).toFixed(2)}`
          );
        if (contFeminino > 0)
          console.log(
            `Média salários femininos: R$${(
              somaFeminino / contFeminino
            ).toFixed(2)}`
          );
        rl.close();
        return;
      }

      rl.question("Digite o sexo (M/F): ", (sexo) => {
        sexo = sexo.toUpperCase();
        rl.question("Digite o número de horas/aula no mês: ", (horas) => {
          horas = Number(horas);
          let salarioBruto = horas * 30;
          let desconto = sexo === "M" ? 0.1 : 0.05;
          let salarioLiquido = salarioBruto * (1 - desconto);

          professores.push({ codigo, salarioBruto, salarioLiquido });

          if (sexo === "M") {
            somaMasculino += salarioLiquido;
            contMasculino++;
          } else if (sexo === "F") {
            somaFeminino += salarioLiquido;
            contFeminino++;
          }

          lerProfessor();
        });
      });
    }
  );
}

lerProfessor();
