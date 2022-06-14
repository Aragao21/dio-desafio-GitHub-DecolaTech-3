//TIPOS DE FUNÇÃO

//Declarativas
function funcao(){
    console.log('Essa mensagem veio de uma função declarativa');
}
funcao();

//Expressões de funções - com nome
var funcao = function nomeFuncao() {
    console.log('Sou uma mensagem de função de expressão!(COM NOME)');
}
funcao();

//Expressões de funções - sem nome
var funcao = function() {
    console.log('Sou uma mensagem de função de expressão! (SEM NOME)');
}
funcao();

//Arrow Function
var funcao = () => {
    console.log('Sou uma arrow function!!')
}
funcao();

//Funções Aritméticas (criando calculadora com javascript)