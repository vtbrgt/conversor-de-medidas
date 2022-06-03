/* PEGAR MEDIDA A SER CONVERTIDA */
const medidas = document.querySelector('#medidas');
let medidaAConverter;

function atualizaMedida() {
  medidaAConverter = medidas.options[medidas.selectedIndex].value;

  converter();
}

medidas.addEventListener('change', atualizaMedida);

/* MEDIDA FINAL */
const medidasFinal = document.querySelector('#medidas2');
let medidaConvertida;

function atualizaMedidaFinal() {
  medidaConvertida = medidasFinal.options[medidasFinal.selectedIndex].value;

  converter();
}

medidasFinal.addEventListener('change', atualizaMedidaFinal);

/* CONVERSÃO DE VALORES */
const valorInput = document.querySelector('#valor_a_converter');
const resultado = document.querySelector('.resultado_conversao');
let valorAConverter = 0;
let valorConvertido = 0;

function capturarValor() {
  valorAConverter = parseFloat(valorInput.value);

  converter();
}

valorInput.addEventListener('input', capturarValor);

function converter() {
  if (medidaAConverter === 'km' && medidaConvertida === 'km') {
    resultado.innerHTML = valorAConverter;
  } else if (medidaAConverter === 'km' && medidaConvertida === 'm') {
    resultado.innerHTML = valorAConverter * 1000;
  } else if (medidaAConverter === 'km' && medidaConvertida === 'cm') {
    resultado.innerHTML = valorAConverter * 100000;
  } else if (medidaAConverter === 'm' && medidaConvertida === 'km') {
    resultado.innerHTML = valorAConverter / 1000;
  } else if (medidaAConverter === 'm' && medidaConvertida === 'm') {
    resultado.innerHTML = valorAConverter;
  } else if (medidaAConverter === 'm' && medidaConvertida === 'cm') {
    resultado.innerHTML = valorAConverter * 100;
  } else if (medidaAConverter === 'cm' && medidaConvertida === 'km') {
    resultado.innerHTML = valorAConverter / 100000;
  } else if (medidaAConverter === 'cm' && medidaConvertida === 'm') {
    resultado.innerHTML = valorAConverter / 100;
  } else if (medidaAConverter === 'cm' && medidaConvertida === 'cm') {
    resultado.innerHTML = valorAConverter;
  }
}
