const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite a duracao do evento em segundos: ", (input) => {
  let segundos = Number(input);
  let horas = Math.floor(segundos / 3600);
  let minutos = Math.floor((segundos % 3600) / 60);
  let segundos_restantes = segundos % 60;

  console.log(
    "duracao: " +
      horas +
      " horas, " +
      minutos +
      " minutos e " +
      segundos_restantes +
      " segundos"
  );

  rl.close();
});
