//Regra - base de calculo
//carne por pessoa = 400g p/ pessoa se + de 6 horas = 650g
//cerveja = 1200 ml p/ pessoa se + de 6 horas = 2000ml
//bebidas (refri e agua) = 1000ml por pessoa se + de 6 horas 1500ml

//crianças acrescentar  metade do valor


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/ 2 * criancas);
    let qtdeTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdeTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/ 2 * criancas);

    resultado.innerHTML = `<p>${qtdeTotalCarne / 1000} Kg de Carne variadas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdeTotalCerveja / 355)} Latas de Cerveja de 355ml</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdeTotalBebidas / 2000)} Pet's de 2L de Bebidas</p>`


}

function carnePP(duracao) {
    
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }


}

function cervejaPP(duracao) {
    
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }


}

function bebidasPP(duracao) {
    
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }


}