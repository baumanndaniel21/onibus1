function registrarEntrada() {
  const horaInicioPico = document.getElementById("horaInicioPico").value;
  const horaFinalPico = document.getElementById("horaFinalPico").value;
  const horaAtual = document.getElementById("horaAtual").value;
  const sensorAtivo = document.getElementById("sensorAtivo").value;
  const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;

  //Conversão de horas em um objeto do tipo Date
  const horaInicioPicoDate = new Date(`1970-01-01T${horaInicioPico}`);
  const horaFinalPicoDate = new Date(`1970-01-01T${horaFinalPico}`);
  const horaAtualDate = new Date(`1970-01-01T${horaAtual}`);

  let contagem = parseFloat(document.getElementById("contagem").textContent);
  if (horaAtualDate >= horaInicioPicoDate && horaAtualDate <= horaFinalPicoDate && sensorAtivo == "sim" && viagemEmAndamento == "sim") {
    contagem = contagem + 1;
  }
  document.getElementById("contagem").textContent = contagem.toString();
}
function registrarSaida() {
  const horaInicioPico = document.getElementById("horaInicioPico").value;
  const horaFinalPico = document.getElementById("horaFinalPico").value;
  const horaAtual = document.getElementById("horaAtual").value;
  const sensorAtivo = document.getElementById("sensorAtivo").value;
  const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;
  
  //Conversão de horas em um objeto do tipo Date
  const horaInicioPicoDate = new Date(`1970-01-01T${horaInicioPico}`);
  const horaFinalPicoDate = new Date(`1970-01-01T${horaFinalPico}`);
  const horaAtualDate = new Date(`1970-01-01T${horaAtual}`);

  let contagem = parseFloat(document.getElementById("contagem").textContent);
  if (horaAtualDate >= horaInicioPicoDate && horaAtualDate <= horaFinalPicoDate && sensorAtivo == "sim" && viagemEmAndamento == "sim") {
    contagem = contagem + 1;
  }
  document.getElementById("contagem").textContent = contagem.toString();
}


