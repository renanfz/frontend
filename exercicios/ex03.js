let nomes = ['oi', 'ola']

let nomesMaiusculos = nomes.map(palavra => palavra.toUpperCase())

console.log(nomesMaiusculos)

var notas2 = [10, 8, 6];
function mediaNotas2(arr) {
    if (arr.length !== 0) {
        var soma = arr.reduce(function (acc, crr) { return acc + crr; }, 0);
        return soma / arr.length;
    }
    else {
        return null;
    }
}

let media = mediaNotas2(notas2); 
console.log(media)

let pss = {
     nome: 'renan', 
     idade: 18,
     profissao: 'dev'
}
function exibirPessoa2(p) {
     return console.log(`${p.nome} tem ${p.idade} anos e trabalha como ${p.profissao}`)
}

exibirPessoa2(pss)