"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1 
function somar(n1, n2) { return n1 + n2; }
//2
let linguagens = ['Python', 'Java', 'Php'];
let newArray = linguagens.map(ling => ling.toUpperCase());
//3
let notas = [10, 8, 6];
function mediaNotas(arr) {
    if (arr.length !== 0) {
        const soma = arr.reduce((acc, crr) => acc + crr, 0);
        return soma / arr.length;
    }
    else {
        return null;
    }
}
mediaNotas(notas);
function exibirPessoa(p) {
    return console.log(`${p.nome} tem ${p.idade} anos e trabalha como ${p.profissao}`);
}
function calcularTotalCarrinho(produtos) {
    let total = produtos.preco * produtos.quantidade;
    return total;
}
//# sourceMappingURL=ex02.js.map