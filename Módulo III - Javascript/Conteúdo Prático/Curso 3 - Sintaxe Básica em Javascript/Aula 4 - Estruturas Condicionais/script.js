// ESTRUTURAS CONDICIONAIS
var jogador1 = 0;
var jogador2 = 0
var placar;

//Ninho de if's
if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
    }else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!');
    } else {
        console.log('Ninguém marcou ponto.');
    }
} else {
    console.log('Jogador inválido.')
}

//If ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');

//Usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}

// Usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;

} 

// Usando else
else {
    console.log('Ninguém marcou ponto.');
}

//Switch case
switch(placar) {
    case placar = jogador1 > jogador2: 
        console.log('Jogador 1 GANHOU!!!')
        break;
    case placar = jogador2 > jogador1: 
        console.log('Jogador 2 GANHOU!!!')
        break;
    default:
        console.log('Ninguém ganhou!')
        break;
}

// LAÇOS DE REPETIÇÃO
let array = ['valor1','valor2','valor3','valor4','valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

//For
for(let indice = 0; indice <array.length; indice++) {
    console.log(indice);
}

//For In - com array
for(let i in array) {
    console.log(i);
}

//For In - com object
for(i in object) {
    console.log(i);
}

//For Off - apenas arrays
for(i of array) {
    console.log(i);
}

//For Off - object
for(i of object.propriedade1) {
    console.log(i);
}

//While
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

//Do While
do {
    a++;
    console.log(a);
}while (a < 10)
