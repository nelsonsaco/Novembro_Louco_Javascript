const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

class Frase {
  constructor() {
    this.texto = "";
  }

  pedirFrase(callback) {
    readline.question("Digite uma frase: ", (input) => {
      this.texto = input;
      callback();
    });
  }

  pedirPalavra() {
    readline.question("Escolha uma palavra da frase: ", (palavra) => {
      const palavras = this.texto.split(" ");
      const indice = palavras.indexOf(palavra);
      if (indice !== -1) {
        console.log(`A palavra "${palavra}" está na posição ${indice} (começando do 0).`);
      } else {
        console.log("Palavra não encontrada na frase.");
      }
      readline.close();
    });
  }
}

const f = new Frase();
f.pedirFrase(() => f.pedirPalavra());