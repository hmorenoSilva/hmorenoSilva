var operacaoMatematica;
const Alura = "Alura";
const primeiroNumero = 142;
const segundoNumero = 34;
const numeroPontoFlutuante = 2.5;

operacaoMatematica = primeiroNumero + segundoNumero + numeroPontoFlutuante;
console.log("Soma.....: " + operacaoMatematica);
operacaoMatematica = primeiroNumero - segundoNumero - numeroPontoFlutuante;
console.log("Subtração: " + operacaoMatematica);
operacaoMatematica = primeiroNumero * segundoNumero * numeroPontoFlutuante;
console.log("Produto..: " + operacaoMatematica);
operacaoMatematica = primeiroNumero / segundoNumero;
operacaoMatematica = operacaoMatematica / numeroPontoFlutuante;
console.log("Divisão..: " + operacaoMatematica);

operacaoMatematica = Alura * primeiroNumero;
console.log(operacaoMatematica);
