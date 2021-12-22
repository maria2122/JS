/*
Buscando e contando dados em Arrays

Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios:
    
    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do Autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor 
    e devolver os livros desse autor
*/
const booksByCategory = [
    {
        categoria: "Riqueza",
        books: [
            {
                titulo: "Os segredos da mente milionária",
                autor:  "T. Harv Eker",
            },
            {
                titulo: "O homem mais rico da Babilônia",
                autor:  "Georg S. Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor:  "Robert T. Kiyosaky e Sharon L. Lechter",
            },
        ],
    },
    {
        categoria: "Inteligência Emocional",
        books:[
            {
                titulo: "Você é insubistituível",
                autor:  "Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do século",
                autor:  "Augusto Cury",
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor:  "Stephen R. Covey",
            },
        ],
    },
];

const totalCategoria = booksByCategory.length;
console.log(totalCategoria);

for(let categoria of booksByCategory){
    console.log('Total de livros da categoria: ',categoria.categoria);
    console.log(categoria.books.length);
}

function contaAutores(){
    let autores = [];
    for(let categoria of booksByCategory){
        for(let books of categoria.books){
            //  verifica se o autor está dentro do array e,se tiver ele retorna o número do index, senão o indexOf voltar com -1 é pq o autor não está dentro do array.
            if(autores.indexOf(books.autor)==-1)
                autores.push(books.autor);
        }
    }
    console.log("Total de autores: ",autores.length);
}
//contaAutores();

function livrosdoAutor(author){
    let books = []

    for(let categoria of booksByCategory){
        for(let book of categoria.books){
            //  verifica se o autor está dentro do array e,se tiver ele retorna o número do index, senão o indexOf voltar com -1 é pq o autor não está dentro do array.
            if(book.autor === author){
                books.push(book.titulo)
            }
        }
    }
    console.log(`Total de livros do autor ${author}: ${books.join(", ")}`)
}
livrosdoAutor('Augusto Cury');