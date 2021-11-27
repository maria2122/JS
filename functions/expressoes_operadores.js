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
*/

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




