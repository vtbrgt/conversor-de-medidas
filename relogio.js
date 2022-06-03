/* DATA E HORA DINÂMICOS */
const atualizaDataEHora = () => {
  data = new Date();
  const relogio = document.querySelector('.data_hora');
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
  const dia = data.getDate();
  const mes = nomeMes[data.getMonth()];
  const ano = data.getFullYear();
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();

  const hora = horas < 10 ? `0${horas}` : horas;
  const minuto = minutos < 10 ? `0${minutos}` : minutos;
  const segundo = segundos < 10 ? `0${segundos}` : segundos;

  relogio.innerHTML = `${dia} de ${mes} de ${ano}, ${hora}:${minuto}:${segundo}`;
};

setInterval(() => {
  atualizaDataEHora();
}, 1000);
