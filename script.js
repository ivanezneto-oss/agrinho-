// ==============================
// AGRINHO 2026 - JavaScript
// ==============================

// Rolagem suave para a seção "Sobre"
function saibaMais() {
    const sobre = document.getElementById("sobre");

    if (sobre) {
        sobre.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// ==============================
// Contador Animado
// ==============================

let numero = 0;
const contador = document.getElementById("numero");

if (contador) {

    const animacao = setInterval(() => {

        numero += 10;

        contador.textContent = numero;

        if (numero >= 2026) {
            contador.textContent = "2026";
            clearInterval(animacao);
        }

    }, 10);

}

// ==============================
// Quiz
// ==============================

function respostaCorreta() {

    alert(
        "✅ Parabéns!\n\nVocê acertou!\n\nSustentabilidade significa produzir preservando os recursos naturais para as futuras gerações."
    );

}

function respostaErrada() {

    alert(
        "❌ Resposta incorreta!\n\nA sustentabilidade busca equilibrar produção, economia e preservação ambiental."
    );

}

// ==============================
// Animação dos Cards
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

});

function mostrarCards() {

    cards.forEach(card => {

        const topo = card.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", mostrarCards);
window.addEventListener("load", mostrarCards);

// ==============================
// Menu Ativo
// ==============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("ativo"));

        link.classList.add("ativo");

    });

});

// ==============================
// Mensagem de Boas-vindas
// ==============================

window.onload = function () {

    console.log("Projeto Agrinho 2026 carregado com sucesso!");

};

// ==============================
// Botão Voltar ao Topo
// ==============================

const voltarTopo = document.createElement("button");

voltarTopo.innerHTML = "⬆";

voltarTopo.style.position = "fixed";
voltarTopo.style.bottom = "25px";
voltarTopo.style.right = "25px";
voltarTopo.style.width = "50px";
voltarTopo.style.height = "50px";
voltarTopo.style.border = "none";
voltarTopo.style.borderRadius = "50%";
voltarTopo.style.background = "#2e7d32";
voltarTopo.style.color = "white";
voltarTopo.style.fontSize = "22px";
voltarTopo.style.cursor = "pointer";
voltarTopo.style.display = "none";
voltarTopo.style.boxShadow = "0 5px 10px rgba(0,0,0,.3)";
voltarTopo.style.zIndex = "999";

document.body.appendChild(voltarTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        voltarTopo.style.display = "block";

    } else {

        voltarTopo.style.display = "none";

    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==============================
// Ano Atual no Rodapé
// ==============================

const ano = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML += `<br><br>© ${ano} - Projeto Agrinho 2026`;

}