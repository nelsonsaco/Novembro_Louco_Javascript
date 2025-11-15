const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

rl.question('Digite sua data de nascimento (dd/mm/aaaa): ', (data) => {
  const partes = data.split('/');
  const dia = partes[0];
  const mes = meses[parseInt(partes[1], 10) - 1];
  const ano = partes[2];

  console.log(`Você nasceu em ${dia} de ${mes} de ${ano}`);
  rl.close();
});