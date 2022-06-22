// O código abaixo tem alguns erros e não funciona como deveria.
// Você pode identificar quais são e corrigi-los em um arquivo TS?
// FINALIZADO - TUDO CERTO
var botaoAtualizar = document.getElementById("atualizar-saldo");
var botaoLimpar = document.getElementById("limpar-saldo");
var soma = document.getElementById("soma");
var campoSaldo = document.getElementById("campo-saldo");
// inicializar campos em zero
resetarCampos();
/********************
 ****** FUNÇÕES *****
 ********************/
function resetarCampos() {
    if (campoSaldo)
        campoSaldo.innerHTML = "0";
    if (soma)
        soma.value = "0";
}
function somarAoSaldo(soma) {
    // previne uso do campo saldo se o mesmo for um valor falsy no contexto booleano
    if (!campoSaldo) {
        return;
    }
    // converter strings para numbers e assim, ser possível uma operação matemática
    var campoSaldoConvertido = Number(campoSaldo.innerHTML);
    var somaConvertida = Number(soma);
    // operação de soma em re-atribuição ao campo saldo
    campoSaldoConvertido += somaConvertida;
    // atualizar o campo saldo com o novo valor obtido na soma
    campoSaldo.innerHTML = campoSaldoConvertido.toString();
}
var limparSaldo = function () { return resetarCampos(); };
/********************
 ** EVENT LISTENERS *
 ********************/
if (botaoAtualizar)
    botaoAtualizar.addEventListener("click", function () {
        if (soma)
            somarAoSaldo(soma.value);
    });
if (botaoLimpar)
    botaoLimpar.addEventListener("click", function () {
        limparSaldo();
    });
