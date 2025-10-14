//1 
function somar(n1:number, n2:number): number {return n1 + n2}

//2
let linguagens: string[] = ['Python', 'Java', 'Php']
let newArray = linguagens.map(ling => ling.toUpperCase())

//3
let notas = [10, 8, 6]
function mediaNotas(arr: Array<number>): number | null {
     if(arr.length !== 0) {
          const soma = arr.reduce((acc, crr) => acc + crr, 0)
          return soma / arr.length
     } else {
          return null
     }
}
mediaNotas(notas)

//4
interface Pessoa {
     nome: string, 
     idade: number,
     profissao?: string
}

function exibirPessoa(p: Pessoa) {
     return console.log(`${p.nome} tem ${p.idade} anos e trabalha como ${p.profissao}`)
}

//5
interface Produto {
     nome: string,
     preco: number,
     quantidade: number
}

function calcularTotalCarrinho(produtos: Produto): number {
     let total: number = produtos.preco * produtos.quantidade
     return total
}