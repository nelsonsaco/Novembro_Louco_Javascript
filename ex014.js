const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite a primeira palavra: ", (palavra1) => {
  rl.question("Digite a segunda palavra: ", (palavra2) => {

    if (palavra1 === palavra2) {
      console.log("As palavras são iguais.")
    } else {
      if (palavra1.length > palavra2.length) {
        console.log(`A primeira palavra "${palavra1}" é maior.`)
      } else if (palavra2.length > palavra1.length) {
        console.log(`A segunda palavra "${palavra2}" é maior.`)
      } else {
        console.log("As palavras têm o mesmo comprimento.")
      }

      if (palavra1.includes(palavra2)) {
        console.log(`${palavra2}" é uma substring de "${palavra1}.`)
      } else {
        console.log(`${palavra2}" não é uma substring de "${palavra1}.`)
      }
    }

    rl.close()
  })
})