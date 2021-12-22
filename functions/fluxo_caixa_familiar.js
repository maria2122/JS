/*
    Sistema de gastos familiar

    Criar um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

    Agora , crie uma função que irá calcular o total de receitas e despesas e irá
    mostrar uma mensagem se a família está com o saldo positivo ou negativo,
    seguindo do valor do saldo.
    */
/*
let dadosOrcamento = {
    receitas: [1200,850,600],
    despesas: [650,600,150],
}

function soma(){
    let totalR=0, totalD=0,totalGeral=0;

    for(let rec in dadosOrcamento.receitas){
        totalR+=dadosOrcamento.receitas[rec];
    }
    console.log(`Total Receita = ${totalR}`);
    for(let desp in dadosOrcamento.despesas){
        totalD+=dadosOrcamento.despesas[desp];
    }
    console.log(`Total Despesa = ${totalD}`);
    totalGeral = totalR - totalD;

    return totalGeral;
};

function calculaSaldo(){
    const recebeSoma = soma(); 

    if(recebeSoma>=0){
        console.log(`Saldo positivo de: ${recebeSoma}`);
     }else{
         console.log(`Saldo negativo de: ${recebeSoma}`); 
      }
}
calculaSaldo();
*/
//Exemplo do Mayk

let family = {
    incomes : [1000,200,3000],
    expenses: [50,50,600,800]
}

function sum(array){
    let total=0;
    for(let value of array){
        total+=value;
    }
    return total;
}

function calculaBalance(){
    const calculateIcomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIcomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}
calculaBalance();