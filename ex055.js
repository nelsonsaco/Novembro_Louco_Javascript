const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite o número de termos, o primeiro termo e a razão (separados por espaço): ",
  (res) => {
    const [n, a1, r] = res.split(" ").map(Number);
    let soma = 0;
    let termo = a1;

    console.log("Termos da PA:");
    for (let i = 0; i < n; i++) {
      console.log(termo);
      soma += termo;
      termo += r;
    }

    console.log("Soma dos termos:", soma);
    rl.close();
  }
);
