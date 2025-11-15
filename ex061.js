const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let total_pessoas = 0;
let andar_atual = 1;
let total_andares = 0;

rl.question("Quantos andares o prédio tem? ", (res) => {
  total_andares = parseInt(res);
  subirElevador();
});

function subirElevador() {
  if (andar_atual > total_andares) {
    console.log(`No final da subida, ${total_pessoas} pessoas irão descer.`);
    rl.close();
    return;
  }

  console.log(`\n=== Andar ${andar_atual} ===`);
  rl.question("Quantas pessoas entraram? ", (res_entrada) => {
    rl.question("Quantas pessoas saíram? ", (res_saida) => {
      let entraram = parseInt(res_entrada);
      let sairam = parseInt(res_saida);

      total_pessoas += entraram - sairam;

      if (total_pessoas > 15) {
        let excesso = total_pessoas - 15;
        console.log("EXCESSO DE PASSAGEIROS. DEVEM SAIR:", excesso);
        total_pessoas = 15;
      }

      if (total_pessoas < 0) {
        total_pessoas = 0;
      }

      andar_atual++;
      subirElevador();
    });
  });
}