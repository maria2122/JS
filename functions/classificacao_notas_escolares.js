/* Transformar notas escolares 
    Crie um algoritmo que trasforme as notas do sistema númerico para 
    sistema de notas em caracteres tipo A, B e C.

    Critérios:
    - de 90 para cima - A
    - entre 80 - 89   - B
    - entre 70 - 79   - C
    - entre 60 - 69   - D
    - menor que 60    - E
*/
let nota_num;

function verificaNota(nota_num){ 

    if(nota_num>=90 && nota_num<=100){
        nota_num = 'A';
        console.log(nota_num);
    }
    else if(nota_num<=89 && nota_num>=80){
        nota_num = 'B';
        console.log(nota_num);
    }
    else if(nota_num<=79 && nota_num>=70){
        nota_num = 'C';
        console.log(nota_num);
    }
    else if(nota_num<= 69 && nota_num>=60){
        nota_num = 'D';
        console.log(nota_num);
    }
    else if(nota_num<60 && nota_num>=0){
        nota_num = 'E';
        console.log(nota_num);
    }
    else{
        console.log("Nota inválida");
    }
    
}
verificaNota(-5);

//exemplo do curso feito pelo Mayk



function getScore(score){
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score <  60 && score >=0;

    let scoreFinal;

    if(scoreA){
        scoreFinal = "A";
    }else if(scoreB){
        scoreFinal = "B";
    }else if(scoreC){
        scoreFinal = "C";
    }else if(scoreD){
        scoreFinal = "D";
    }else if(scoreF){
        scoreFinal = "F";
    }else{
        scoreFinal = "Nota inválida!!";
    }
    return scoreFinal;
}
console.log(getScore(101));
console.log(getScore(-6));
console.log(getScore(29));
console.log(getScore(95));
console.log(getScore(76));
console.log(getScore(55));
console.log(getScore(82));
