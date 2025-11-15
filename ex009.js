const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// gera número aleatório entre min e max
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera tempo aleatório em milissegundos (ex: 2 a 5 segundos)
function tempoAleatorio() {
  return Math.floor(Math.random() * 3000) + 2000;
}

const numero = numeroAleatorio(0, 9);

console.log("Aguarde...");

setTimeout(() => {
  const inicio = Date.now();
  rl.question(`AGORA! Digite o número ${numero}: `, (resposta) => {
    const fim = Date.now();
    const tempo = (fim - inicio) / 1000;
    if (Number(resposta) === numero) {
      console.log(
        `Parabéns! Seu tempo de reação foi ${tempo.toFixed(2)} segundos.`
      );
    } else {
      console.log("Você errou! O número correto era ${numero}.");
    }
    rl.close();
  });
}, tempoAleatorio());
