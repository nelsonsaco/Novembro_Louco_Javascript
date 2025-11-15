const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let mais15 = 0;
let somaNao = 0;
let contNao = 0;

rl.question("quantos hoteis? ", (q) => {
  const total = parseInt(q);
  const hoteis = [];
  let i = 0;

  function lerHotel() {
    if (i >= total) {
      let mediaNao;
      if (contNao > 0) {
        mediaNao = somaNao / contNao;
      } else {
        mediaNao = 0;
      }

      console.log(`hoteis > 15km: ${mais15}`);
      console.log(`media nao asfaltados: ${mediaNao.toFixed(2)}`);
      rl.close();
      return;
    }

    rl.question(`nome hotel ${i + 1}: `, (nome) => {
      rl.question("distancia km: ", (dist) => {
        rl.question("visitantes: ", (vis) => {
          rl.question("acesso (0=nao,1=sim): ", (acc) => {
            const d = parseFloat(dist);
            const v = parseInt(vis);
            const a = parseInt(acc);

            if (d > 15) mais15++;
            if (a === 0) {
              somaNao += v;
              contNao++;
            }
            if (a === 1 && v < 1000) {
              console.log(`hotel asfaltado <1000: ${nome}, ${d} km`);
            }

            i++;
            lerHotel();
          });
        });
      });
    });
  }

  lerHotel();
});
