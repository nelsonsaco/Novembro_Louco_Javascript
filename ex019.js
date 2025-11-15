const readline2 = require("readline")

const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl2.question("Digite uma string: ", (str) => {
  const texto = str.trim()
  const tamanho = texto.length
  const maiusculo = texto.toUpperCase()

  // Contar vogais
  const vogais = texto.match(/[aeiouAEIOU]/g)
  const numVogais = vogais ? vogais.length : 0

  // Verifica início e fim
  const comecaUNI = texto.toUpperCase().startsWith("UNI")
  const terminaRIO = texto.toUpperCase().endsWith("RIO")

  // Contar dígitos
  const digitos = texto.match(/[0-9]/g)
  const numDigitos = digitos ? digitos.length : 0

  // Verifica palíndromo
  const apenasLetras = texto.toLowerCase().replace(/[^a-z0-9]/g, "")
  const palindromo = apenasLetras === apenasLetras.split("").reverse().join("")

  console.log(`Número de caracteres: ${tamanho}`)
  console.log(`Em maiúsculas: ${maiusculo}`)
  console.log(`Número de vogais: ${numVogais}`)
  console.log(`Começa com "UNI"? ${comecaUNI}`)
  console.log(`Termina com "RIO"? ${terminaRIO}`)
  console.log(`Número de dígitos: ${numDigitos}`)
  console.log(`É palíndromo? ${palindromo}`)

  rl2.close()
})