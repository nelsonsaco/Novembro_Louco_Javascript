const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numeros = [];
let contador = 1;

function lernumero() {
  rl.question(`digite o número ${contador}: `, (numstr) => {
    const num = parseInt(numstr);
    numeros.push(num);

    contador++;
    if (contador <= 10) {
      lernumero();
    } else {
      let soma = 0;
      let maior = numeros[0];
      let menor = numeros[0];

      for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        if (numeros[i] > maior) maior = numeros[i];
        if (numeros[i] < menor) menor = numeros[i];
      }

      const media = soma / numeros.length;

      console.log(`\nmédia: ${media.toFixed(2)}`);
      console.log(`maior número: ${maior}`);
      console.log(`menor número: ${menor}`);

      rl.close();
    }
  });
}

lernumero();
