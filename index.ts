// O código abaixo tem alguns erros e não funciona como deveria.
// Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

// inicializar campos em zero
if (campoSaldo) campoSaldo.innerHTML = "0";
if (soma) soma.value = "0";

/********************
 ****** FUNÇÕES ******
 ********************/
const somarAoSaldo = (soma: string) => {
  // previne uso do campo saldo se for um valor falsy
  if (!campoSaldo) {
    return;
  }
  // converter strings para numbers e assim, ser possível uma operação matemática
  let campoSaldoConvertido = Number(campoSaldo.innerHTML);
  let somaConvertida = Number(soma);
  // operação de soma em re-atribuição ao campo saldo
  campoSaldoConvertido += somaConvertida;
  // atualizar o campo saldo com o novo valor obtido na soma
  campoSaldo.innerHTML = campoSaldoConvertido.toString();
};

const limparSaldo = () => {
  // resetar campos à zero
  if (campoSaldo) campoSaldo.innerHTML = "0";
  if (soma) soma.value = "0";
};

/********************
 ** EVENT LISTENERS **
 ********************/
if (botaoAtualizar)
  botaoAtualizar.addEventListener("click", function () {
    if (soma) somarAoSaldo(soma.value);
  });

if (botaoLimpar)
  botaoLimpar.addEventListener("click", function () {
    limparSaldo();
  });
