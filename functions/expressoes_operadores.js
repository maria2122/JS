/* Expressões e Operadores

- Expressions
- Operators
    Binary
    console.log(number + 1)
    Unary
    console.log(++number)
    Ternary
    console.log(true ? 'alo' : 'nada')


    let number = 1;

//função que executa imediatamente. No caso dessas funções é necessário colocar ;
//(ponto e vírgula  das atribuições que vem antes) pois o js entende que o que vem antes 
//está junto com a função.

(function(){
    console.log('executou ao carregar!');
})();
------------------------------------------------------------------------------------------------
// new
// left-hand-side expression que cria um novo ojeto 
let nome = new String('Maria');
nome.sobreNome = "Jaqueline";
let idade = new Number(23);
console.log(nome.sobreNome,idade);

let data = new Date('2021/11/15');
console.log(data);
console.log(data.__proto__);

//Operadores unários
// typeof
// delete

console.log(typeof 'Tipo String');
const pessoa = {
    nome : 'jaque',
    sobrenome : 'silva'
}
// excluindo atributo nome do objeto pessoa
delete pessoa.nome;
console.log(pessoa);

//Exponencial **
console.log(3**3);

// Operadores de Comparação
um = 1
dois = 2
console.log(um == dois);
console.log(um != dois);
console.log(um == "1");//ele compara também o conteúdo da string
console.log(um === "1");//ele compara também o tipo de dados
console.log(um >= 1);

// Operadores lógicos

let pao = false;
let queijo = true;
console.log(pao&&queijo);
console.log(pao||queijo);
console.log(!pao);

//Operador Condicional(Ternário)
let pao = true;
let queijo = true;
//if(pao && queijo ?){...} else(:){...}
const verificaConficao = pao && queijo ? 'Café completo' : 'Café incompleto';
console.log(verificaConficao);


//Type Conversion(typecasting) vs Type Coersion com FALSY e 


// FALSY(são por padrão falso)

false
0
-0
""
null
undefined
NaN

Exemplo:
console.log(NaN ? 'Verdadeiro' : 'Falso' );


//TRUTHY(são por padrão verdadeiros)


true
{}
[]
1
2.6
"98"
"false"
-1
Infinity
-Infinity

Exemplo:
console.log({} ? 'Verdadeiro' : 'Falso' );

//Controle de fluxo com IFELSE
let temperatura = 34.6;
let temperaturaAlta = 37.5;

if(temperatura>temperaturaAlta){
    console.log('Está com Febre!');
}
else{
    console.log('Não está com Febre!');
}


//switch
let mes = '1';

switch(mes){
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default:
        console.log('Default!! Número não está no intervalo 0 a 12 ou dígito inválido!!')
}


//Thorow 

function recebeNome(nome = ''){
    if(nome===''){
        throw new Error("Nome é necessário pois está vazio!!");
    }
    console.log(nome);
}
//Para a o try ao executar a function recebeNome()  o throw dispara uma verificação e devolve uma variável(e) com a mesagem de erro.
//Try...Catch
try{
    recebeNome('Maria');
}catch(e){
    console.log(e)
}
console.log("Após erro!!");


//Estrutura de repetição 

//for
//break(para a execução)
//continue (ignora o atual e passa para a próxima itreração)
for(let i=0; i<10; i++){
    
    if(i===5)
        continue;

    console.log(i);
}

let i = 0;
while(i<10){
    console.log(i )
    i++;
}

//for...of

let nome = 'Jaque';
let names = ['João','Paulo','Pedro'];
//pegando um caracter da string Jaque
for(let char of nome){
    console.log(char);
}
// pegando elementos de um array
for(let name of names){
    console.log(name);

}

//for...in

let pessoa = {
    nome: 'Maria',
    idade : 30,
    peso: 88.6,
}
array = ['Maria','Jaqueline','Santos'];

let array1 =
{
    0 :'1',
    1 :'2',
    2 :'3'
};
// pega os index do objeto.
for(let index in array){
    console.log()
    console.log(array[index]);
};
*/


