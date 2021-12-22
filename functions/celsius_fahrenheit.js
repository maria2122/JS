/* Ceslsius em Fahrenheit

Criar uma função que receba uma string em celsius ou fahrenheit 
e faça a conversão de uma unidade para outra

Fórmulas:
C = (F -32)* 5/9
F = C * 9/5 + 32
*/

let valorC = 29;
let valorF = 100;

function conversion(){
    let C=0, F=0;
    C = (valorF - 32) * 5/9;
    F = valorC * 9/5 + 32;
    console.log(valorF.toFixed(2),C.toFixed(2)); 
    console.log(valorC.toFixed(2),F.toFixed(2)); 
}
conversion();

//Exemplo do Mayk 
function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');
    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado!');
    }
    //fluxo ideal, F -> C
    let updateDegree = degree.toUpperCase().replace("F","");

    let formula = (fahrenheit) => {
        var numbers = fahrenheit.replace(/[^0-9]/g,'');
        numbers= (numbers-32)* 5/9;
        return parseInt(numbers);
    };
    let degreeSign = 'C';
    
    // fluxo alternativo C -> F
    if(celsiusExists){
        updateDegree = degree.toUpperCase().replace("C","");
        formula = (celsius) => {
        var numbers = celsius.replace(/[^0-9]/g,'');
        numbers= numbers * 9/5 + 32;
        return parseInt(numbers);
        };
        degreeSign = 'F';

    }
    
    return formula(updateDegree)+ degreeSign;

}
 
try{
    //console.log(transformDegree('50xF'));
    console.log(transformDegree('10PC'));
    console.log(transformDegree('50XF'));
    
}catch(error){
    console.log(error);
}
