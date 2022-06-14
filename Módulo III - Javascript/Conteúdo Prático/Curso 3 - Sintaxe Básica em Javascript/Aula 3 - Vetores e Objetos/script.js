//O QUE SÃO VETORES OU ARRAYS

//Como declarar um array
let array = ['string', 1, true];
console.log(array);

//Pode guardar vários tipos de dados
let array1 = ['string', 1, true, ['array2'], ['array3'], ['array4']];
console.log(array1[0]);

//forEach
array.forEach(function (item, index){console.log(item, index)})

//Push
array.push([]);
console.log(array);

//Pop
array.pop();
console.log(array);

//Shift
array.shift();
console.log(array);

//Unshift
array.unshift('novo item no início');
console.log(array);

//IndexOf
console.log(array.indexOf(true));

//Splice
array.splice(0, 3);
console.log(array);

//Slice
let novoArray = array.slice(0, 3);
console.log(novoArray);

let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno:{objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);