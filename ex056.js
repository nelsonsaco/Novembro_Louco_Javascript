const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let soma_salarios = 0;
let total_pessoas = 0;
let maior_idade = 0;
let menor_idade = Infinity;
let mulher100 = 0;

function ler_dados() {
  rl.question("Idade (negativa para sair): ", (res_idade) => {
    let idade = parseInt(res_idade);
    if (idade < 0) {
      if (total_pessoas === 0) {
        console.log("Nenhum dado inserido.");
      } else {
        console.log(
          "Media de salarios:",
          (soma_salarios / total_pessoas).toFixed(2)
        );
        console.log("Maior idade:", maior_idade);
        console.log("Menor idade:", menor_idade);
        console.log("Quantidade de mulheres com salario ate 100:", mulher100);
      }
      rl.close();
      return;
    }

    rl.question("Sexo (M/F): ", (sexo) => {
      rl.question("Salario: ", (res_salario) => {
        let salario = parseFloat(res_salario);

        soma_salarios += salario;
        total_pessoas++;
        if (idade > maior_idade) maior_idade = idade;
        if (idade < menor_idade) menor_idade = idade;
        if (sexo.toUpperCase() === "F" && salario <= 100) mulher100++;

        ler_dados();
      });
    });
  });
}

ler_dados();
