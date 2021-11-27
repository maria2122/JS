//Object
const person = {
    nome:   'Maria',
    idade:   45,
    peso:    65.5,
    ehAdmin: false,
}
console.log(person)

//Array
//Acesando propriedade de um obejto dentro de um array

const animais = [
    'Leao',
    'Macaco',
    'Gato',
    {
        cor:'rosa',
        idade:2 
    }

]
console.log(animais.length)
console.log(animais[2])
console.log(animais[3].cor)
console.log(animais[3].idade)
