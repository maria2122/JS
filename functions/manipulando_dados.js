/*
    Prototype
    *cadeia de protótipos/
    *funcionalidades contidas(padrão) no javascript 
    que podemos herdar.
    * prototype-based language
    * prototype chain
    * __proto__

*/

/* 
    Type conversion(typecasting) vs Type coersion(Coerção de tipo de dado)

*/

//Ex: Type conversion(typecasting) 
// o js força a string a ser um number e realiza a soma.
console.log(Number('5')+8);

//Type coersion(Coerção de tipo de dado),
// o js automaticamente interpreta o 9 em decimal como uma String e concatena
console.log('9'+9);

//Outros exemplos

let string = '123';
console.log(Number(string));
let number = 123;
console.log(String(number));

/*Contar quantos caracteres tem uma palavra e quantos dígitos tem um número com LENGTH.
O LENGTH é uma propriedade da STRINS só conta tamanho em string, por isso na linha 38 
tivemos que converter o numero em string.*/

let word = "Maria";
console.log(word.length);
let num =123358525;
console.log(String(num).length);

//Fixar casas decimais em um número com toFixed, contudo, o retorno do toFixed é uma String

let numbFixed = 12.121212112121;
console.log(numbFixed.toFixed(2));

// Trocar o ponto por vírgula com replace(o que quero trocar, pelo que quero trocar) ou seja ele faz a substituição.

console.log(numbFixed.toFixed(2).replace(".",","));

// Transformar letras minúsculas em maiúsculas e vice versa(detalhe: a conversão é feita na string inteira).

let word1 = "maria jaqueline dos santos silva";
console.log(word1.toUpperCase());
console.log(word1.toLocaleLowerCase());


console.log(word1.toUpperCase().toLocaleLowerCase())


/*Separando um texto com espaços e jogando dentro de um array e substituindo os espaços por qualquer coisa */

let textoX = "And road becomes my bride...";
// O split cria um array e, separa cada palavra da string acima quando acha um espaço inserindo em outro índice do array.
let ArrayX = textoX.split(" ");
console.log(ArrayX)

// Join() une o conteúdo do array e se podemos passar um parâmentro para inserir entre os índices.
let FraseSubstituda = ArrayX.join("*");
console.log(FraseSubstituda)

//Verifica se o texto contém uma palavra específica com includes(o que quero verificar) retorna true ou false.

let frase = "And road Becomes my Bride!!#";
console.log(frase.includes("#"));

//Criando um array com construtor

let MeuArray = new Array('x','y','z','a','n');
console.log(MeuArray);

//Conta num elementos dentro do array.
console.log(MeuArray.length);

// Transformar uma cadeia de caracteres em elementos de um array com Array.from().
console.log(Array.from(frase));
