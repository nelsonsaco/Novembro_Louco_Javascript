const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let maior_idade = 0;
let mulher_18_35 = 0;
let olhos_verdes_cabelos_louros = 0;

function perguntarHabitante() {
  rl.question("Idade (-1 para sair): ", (res_idade) => {
    let idade = parseInt(res_idade);
    if (idade === -1) {
      console.log("Maior idade:", maior_idade);
      console.log("Mulheres entre 18 e 35 anos:", mulher_18_35);
      console.log(
        "Indivíduos com olhos verdes e cabelos louros:",
        olhos_verdes_cabelos_louros
      );
      rl.close();
      return;
    }

    if (idade > maior_idade) {
      maior_idade = idade;
    }

    rl.question("Sexo (M/F): ", (sexo) => {
      rl.question("Cor dos olhos (azuis, verdes, castanhos): ", (olhos) => {
        rl.question(
          "Cor dos cabelos (louros, castanhos, pretos): ",
          (cabelos) => {
            sexo = sexo.toUpperCase();
            olhos = olhos.toLowerCase();
            cabelos = cabelos.toLowerCase();

            if (sexo === "F" && idade >= 18 && idade <= 35) {
              mulher_18_35++;
            }

            if (olhos === "verdes" && cabelos === "louros") {
              olhos_verdes_cabelos_louros++;
            }

            perguntarHabitante(); // repete para o próximo
          }
        );
      });
    });
  });
}

perguntarHabitante();
