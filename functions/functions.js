// declaração da função
function criaFunction(){
    console.log("Imprime teste...")
}
//executa função
criaFunction()


//guardar funções dentro de variévies
//function expression
//function anonymous
//função criada passando parêmetros n1 e n2.
const sum = function(n1, n2){
    let total = (n1+n2)
    //importante a função retornar algo para não haver undefined(sem retorno)
    return total;
};

//execução passando argumentos 2 e 3.
sum(2,3);

let num1 = 10;
let num2 = 25;

console.log(`primeiro num é ${num1}`)
console.log(`segundo  num é ${num2}`)
console.log(`soma é ${sum(num1,num2)}`)


let subject;
/* função sem parâmetro pega o conteúdo da variável de fora e 
o sobrescreve dentro da função com a variável global - subject.
Se houver uma variável como parâmetro, mesmo sendo com o mesmo nome ele não sobreescreve */
function criaPensamento(){
    subject = 'mudando projeto';
    return subject;
};

console.log(subject);
console.log(criaPensamento());
console.log(subject);

//Se houver uma variável como parâmetro, mesmo sendo com o mesmo nome ele não sobreescreve.

function criaPensamento2(subject){
    subject = '';
    return subject;
};
console.log(subject);
console.log(criaPensamento2());
console.log(subject);


/* Hoisting : é quando o js desloca a declaração
 de funções ou variéveis para o topo do código(automaticamente).
 Ex:na função abaixo chamamos primeiro a função e depois a declaramos 
 e, isso funciona normalmente no js */

 //execução da função
 funcaoSoma();

 //criação da função
 function funcaoSoma(){
    let x=1,y=5;
    console.log(x+y)
 };

// arrow function ()=>, podemos passar parâmetros e depois executá-la.
const sayMyName = (nome) =>{
    console.log(nome)
};

sayMyName('Função do tipo expression')


//callback function(pegar de volta)

function sayMyName3(nome){
    console.log('Antes Callback');
    nome();
    console.log('Depois Callback');
}
/* passando uma arrow functin como parâmetro de sayMyName()
linha 9 diz que quando estamos executando sayMyName() estamos 
passando um valor que é tambem uma função
*/
sayMyName3(
    () =>{
        console.log(' Dentro Callback function');
    }
);

/*
function constructor

* expressão new
* criar novo objeto
* this keyword
*/

/* this dentro da função sempre  refencia o objeto que está 
fora da função(ex this.nome)*/ 
function Pessoa(nome){
    this.nome = nome;
    this.andar = function(){
        return this.nome + " está andando";
    }
};

// construindo e instanciando objeto pessoa;
const maria = new Pessoa("Maria");
const jaqueline = new Pessoa("Jaqueline");

console.log(maria.andar());
console.log(jaqueline.andar());

function say(message) {
    // show nothing if the message is empty
    if (! message ) {
        console.log("Não houve nenhuma mensagem,parando a função...");
        return;
    }
    console.log(message);
}

//trabalhando com objeto arguments o qual se comporta como uma matriz.

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1,2,3,4,5))