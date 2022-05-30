/* DATA E HORA DINÂMICOS */
data = new Date();
const dataHora = document.querySelector('.data_hora');
nomeMes = new Array(
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'agosto',
  'outubro',
  'novembro',
  'dezembro'
);

function atualizaDataEHora() {
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();

  dataHora.innerHTML =
    data.getDate() +
    ' de ' +
    nomeMes[data.getMonth()] +
    ' de ' +
    data.getFullYear() +
    ', ' +
    hora +
    ':' +
    minuto +
    ':' +
    segundo;
  setTimeout('atualizaDataEHora()', 500);
}

document.addEventListener('load', atualizaDataEHora());
