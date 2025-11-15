const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite o primeiro lado do triângulo: ", (v1) => {
  rl.question("digite o segundo lado do triângulo: ", (v2) => {
    rl.question("digite o terceiro lado do triângulo: ", (v3) => {
      let x = Number(v1);
      let y = Number(v2);
      let z = Number(v3);

      if (x + y > z && x + z > y && y + z > x) {
        // É um triângulo
        if (x === y && y === z) {
          console.log("triângulo equilátero");
        } else if (x === y || x === z || y === z) {
          console.log("triângulo isósceles");
        } else {
          console.log("triângulo escaleno");
        }
      } else {
        console.log("não é possível formar um triângulo");
      }

      rl.close();
    });
  });
});
