//1 --- FILTER
let numbers = [1, 2, 3, 4, 5, 6]
let novoArray = numbers.filter(numero => numero % 2 == 0)

//2 --- SPLIT
let palavra = 'Eu gosto de JavaScript'
let novoArray2 = palavra.split(' ').length
console.log('saida: ' + novoArray2)

//3 --- REDUCE
let lista = [8, 6, 10, 7]
let media = lista.reduce((acc, elem) => acc + elem, 0) / lista.length
console.log(media)

//4 --- FILTER
let pessoas = [
     { nome: 'Ana', idade: 17 },
     { nome: 'Lucas', idade: 22 },
     { nome: 'Bea', idade: 13 }
]
let maioresDeIdade = pessoas.filter(p => p.idade >= 18)
console.table(maioresDeIdade)

//5 --- METODOS DE ARRAY
let fila = []

let entrarNaFila = nome => {fila.push(nome)}

let atenderProximo = () => {
     console.log(fila[0])
     fila.shift()
}

let mostrarFila = () => console.log(fila)
