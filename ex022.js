const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let q = [];
let i = 0;

function lerNumero() {
  if (i < 20) {
    rl.question(`digite o número positivo ${i + 1}: `, (num) => {
      num = Number(num);

      if (num > 0) {
        q.push(num);
        i++;
      } else {
        console.log("só números positivos, tenta de novo.");
      }

      lerNumero();
    });
  } else {
    let maior = q[0];
    let posicao = 0;

    for (let j = 1; j < q.length; j++) {
      if (q[j] > maior) {
        maior = q[j];
        posicao = j;
      }
    }

    console.log("\nmaior número: ${maior}");
    console.log("posição no vetor: ${posicao}");
    rl.close();
  }
}

lerNumero();
