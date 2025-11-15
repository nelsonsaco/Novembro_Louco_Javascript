const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

let numeros = []
let contador = 0

function pedirNumero() {
  if (contador < 10) {
    readline.question(`Digite o número ${contador + 1}: `, (n) => {
      numeros.push(Number(n))
      contador++
      pedirNumero()
    })
  } else {
    readline.question("Digite o número para comparar: ", (comparar) => {
      comparar = Number(comparar)
      let menores = numeros.filter((x) => x < comparar).length
      console.log(`Existem ${menores} números menores que ${comparar}.`)
      readline.close()
    })
  }
}

pedirNumero()