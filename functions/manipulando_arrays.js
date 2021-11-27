// Manipulando Arrays
let techs = ["js","nodejs","reactjs","python"];

//Adicionar um item no fim
//techs.push("java");
//Adicionar no começo
//techs.unshift("sql");
//Remover do fim
//techs.pop();
//Remover do começo
//techs.shift();
//Pegar somente alguns elementos do array,começando a contar a partir do índice X até o tamanho do Array.
//console.log(techs.slice(1,(techs.length)));
//Remover 1 ou mais elementos em qualquer posição do array splice(índice, qtd elementos que quero remover).
//techs.splice(1,1);
//Encontrar a posição de um elemento X no array
let posicao = techs.indexOf('js');
console.log(posicao);// retornou 0.
// tendo a posição, podemos fazer outras operações, como remover por exemplo.
techs.splice(posicao,1);
console.log(techs);