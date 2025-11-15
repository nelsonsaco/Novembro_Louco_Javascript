const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nome1, altura1, peso1;
let nome2, altura2, peso2;

rl.question("Digite o nome da primeira pessoa: ", (n1) => {
  nome1 = n1;
  rl.question("Digite a altura da primeira pessoa (m): ", (a1) => {
    altura1 = parseFloat(a1);
    rl.question("Digite o peso da primeira pessoa (kg): ", (p1) => {
      peso1 = parseFloat(p1);

      rl.question("Digite o nome da segunda pessoa: ", (n2) => {
        nome2 = n2;
        rl.question("Digite a altura da segunda pessoa (m): ", (a2) => {
          altura2 = parseFloat(a2);
          rl.question("Digite o peso da segunda pessoa (kg): ", (p2) => {
            peso2 = parseFloat(p2);

            let maisPesadaNome, maisPesadaPeso;
            if (peso1 > peso2) {
              maisPesadaNome = nome1;
              maisPesadaPeso = peso1;
            } else {
              maisPesadaNome = nome2;
              maisPesadaPeso = peso2;
            }

            let maisAltaNome, maisAltaAltura;
            if (altura1 > altura2) {
              maisAltaNome = nome1;
              maisAltaAltura = altura1;
            } else {
              maisAltaNome = nome2;
              maisAltaAltura = altura2;
            }

            console.log(
              `\nmais pesada: ${maisPesadaNome}, peso: ${maisPesadaPeso} kg`
            );
            console.log(
              `mais alta: ${maisAltaNome}, altura: ${maisAltaAltura} m`
            );

            rl.close();
          });
        });
      });
    });
  });
});
