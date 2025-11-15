function mostrarHora() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  console.clear(); // limpa o terminal a cada segundo
  console.log(`${horas}:${minutos}:${segundos}`);
}

// Atualiza a cada segundo
setInterval(mostrarHora, 1000);