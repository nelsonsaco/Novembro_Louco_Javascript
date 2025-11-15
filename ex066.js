const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite uma frase: ", (frase) => {
  let resultado = "";

  for (let i = 0; i < frase.length; i++) {
    const letra = frase[i];

    if ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(letra)) {
      resultado += "&"; // troca as consoantes por &
    } else {
      resultado += letra; // mantém vogais e símbolos
    }
  }

  console.log("Saída:", resultado);
  readline.close();
});