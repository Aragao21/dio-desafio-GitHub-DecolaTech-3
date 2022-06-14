// TIPOS PRIMITIVOS 

//Boolean 
var VouF = false;
console.log(typeof(VouF));

//Number 
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String 
var nome = 'Allyson';
console.log(typeof(nome));

//Como declarar:
var variavel;
let variavel2;
const constante = 'Flávia';
console.log(variavel);

//Escopo Global
var escopoGlobal = 'global';
console.log(escopoGlobal);

//Escopo Local
function escopoLocal() {
    let escopoLocalInterno = 'local'; 
    console.log(escopoLocalInterno);
}
escopoLocal();

//Declaração
var nome = 'Flávia'

//Comparação
var comparacao = '0' == 0;
console.log(comparacao);

//Comparação
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//OPERADORES ARITMÉTICOS:

//Adição
var adicao = 1 + 1;
console.log(adicao);

//Subtração
var subtracao = 2 - 1;
console.log(subtracao);

//Multiplicação
var multiplicacao = 3 * 12;
console.log(multiplicacao);

//Divisão Real
var divisaoReal = 3 / 12;
console.log(divisaoReal);

//Divisão Inteira
var divisaoInteira = 4 % 23;
console.log(divisaoInteira);

//Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//OPERADORES RELACIONAIS:
 
// > Maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

// < Menor que
var menorQue = 5 < 2;
console.log(menorQue);

// >= Maior ou igual a
var maiorOuIgualA = 5 >= 2;
console.log(maiorOuIgualA);

// >= Menor ou igual a
var maiorOuIgualA = 5 <= 2;
console.log(maiorOuIgualA);

//OPERADORES LÓGICOS

//E - considera que todos os valores sejam true
var e = true && false;
console.log(e);

//Ou - Considera que qualquer valor seja true
var ou = true || false;
console.log(e);

//Não - Inverte o valor de true para false ou vice-versa
var nao = !true;
console.log(e);