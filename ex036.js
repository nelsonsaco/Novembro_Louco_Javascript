const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite a quantidade de funcionários: ", (qtdstr) => {
  const qtd = parseInt(qtdstr);
  let funcionarioatual = 1;

  let soma_salarios = 0;
  let salario_maior = 0;
  let salario_menor = 0;

  function lerfuncionario() {
    rl.question(`funcionário ${funcionarioatual} - digite o nome: `, (nome) => {
      rl.question(
        `funcionário ${funcionarioatual} - digite o salário: `,
        (salariostr) => {
          const salario = parseFloat(salariostr);

          soma_salarios += salario;
          if (funcionarioatual === 1) {
            salario_maior = salario;
            salario_menor = salario;
          } else {
            if (salario > salario_maior) salario_maior = salario;
            if (salario < salario_menor) salario_menor = salario;
          }

          funcionarioatual++;
          if (funcionarioatual <= qtd) {
            lerfuncionario();
          } else {
            const media = soma_salarios / qtd;
            console.log(`\nmédia salarial: ${media.toFixed(2)}`);
            console.log(`salário mais alto: ${salario_maior.toFixed(2)}`);
            console.log(`salário mais baixo: ${salario_menor.toFixed(2)}`);

            rl.close();
          }
        }
      );
    });
  }

  lerfuncionario();
});
