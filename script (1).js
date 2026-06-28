function saibaMais() {

document.getElementById("sobre").scrollIntoView({
behavior: "smooth"
});

}

let numero = 0;

let contador = setInterval(() => {

numero++;

document.getElementById("numero").innerHTML = numero;

if(numero >= 2026){

clearInterval(contador);

}

}, 5);

function respostaCorreta(){

alert("✅ Correto!\n\nA sustentabilidade busca produzir preservando os recursos naturais para as futuras gerações.");

}

function respostaErrada(){

alert("❌ Resposta incorreta!\n\nO objetivo é produzir respeitando o meio ambiente.");

}

window.addEventListener("scroll",()=>{

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const pos=card.getBoundingClientRect().top;

if(pos<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="1s";

});