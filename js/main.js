
function soma(n1,n2){
    return n1+n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
}

var idade = prompt("Qual é a sua idade ?");
console.log(validaIdade(idade));
alert("Sua idade é " + idade + " anos");



/*
var frutas = [{nome: "fruta", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var nome = "Vinicius Rosa";
var n1 = 5;
var n2 = 20;
var frase = "Japão é o melhor time";

console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
*/