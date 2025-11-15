const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nomes = [];
let count = 0;

function pedirNomes() {
  if (count < 10) {
    rl.question(`Digite o nome da pessoa ${count + 1}: `, (nome) => {
      nomes.push(nome);
      count++;
      pedirNomes();
    });
  } else {
    rl.question("Digite o nome que deseja procurar: ", (busca) => {
      if (nomes.includes(busca)) {
        console.log("ACHEI");
      } else {
        console.log("NÃO ACHEI");
      }
      rl.close();
    });
  }
}

pedirNomes();
