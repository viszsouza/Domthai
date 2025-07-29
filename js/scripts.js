// === Carrossel de Texto e Ícone ===
const items = [
    {
        text: "Entrega grátis na primeira compra",
        icon: "../imgs/iconesBanner/caminhao-sofa.png"
    },
    {
        text: "Parcele em até 6x no cartão",
        icon: "../imgs/iconesBanner/cartao-de-credito.png"
    },
    {
        text: "Compra 100% segura",
        icon: "../imgs/iconesBanner/verificacao-de-escudo.png"
    }
];

let textIndex = 0;
const textEl = document.getElementById("carouselText");
const iconEl = document.getElementById("carouselIcon");

function updateContent(index) {
    textEl.classList.add("fade-out");
    iconEl.classList.add("fade-out");

    setTimeout(() => {
        textEl.textContent = items[index].text;
        iconEl.src = items[index].icon;
        textEl.classList.remove("fade-out");
        iconEl.classList.remove("fade-out");
    }, 500);
}

function prevItem() {
    textIndex = (textIndex - 1 + items.length) % items.length;
    updateContent(textIndex);
    resetAutoPlay();
}

function nextItem() {
    textIndex = (textIndex + 1) % items.length;
    updateContent(textIndex);
    resetAutoPlay();
}

let textInterval = setInterval(() => {
    nextItem();
}, 3000);

function resetAutoPlay() {
    clearInterval(textInterval);
    textInterval = setInterval(() => {
        nextItem();
    }, 3000);
}

window.onload = () => updateContent(textIndex);

// === Carrossel de Imagens com Bolinhas ===
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let imageIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    imageIndex = (imageIndex + 1) % slides.length;
    showSlide(imageIndex);
}

setInterval(nextSlide, 3000);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        imageIndex = i;
        showSlide(imageIndex);
    });
});

// HAMBURGUER
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const navlist = document.querySelector(".nav-list")

navlist.addEventListener("click", () => nav.classList.toggle("active"));
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

// MODAL
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalOverlay");
    const openButtons = document.querySelectorAll(".abrir-modal");
    const closeButton = document.getElementById("fecharModal");
    const enviarBtn = document.getElementById("enviarWhatsapp");

    // Abrir modal
    openButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });

    // Fechar modal
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Enviar dados para WhatsApp
    enviarBtn.addEventListener("click", () => {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();

        if (!nome || !email || !telefone) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const numeroDestino = "558196806314"; // Substitua pelo número correto com DDD
        const mensagem = `Olá! Gostaria de acessar o catálogo.\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`;
        const urlWhatsapp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;

        window.open(urlWhatsapp, "_blank");

        // Fecha o modal após envio
        modal.style.display = "none";
    });
});

// ANIMAÇÕES GLOBAIS
// Coletando o observador da página
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        }
    })
})

// Selecionando os elementos com a classe ".hidden"
const elements = document.querySelectorAll('.hidden')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements.forEach((element) => myObserver.observe(element))

// Selecionando os elementos com a classe ".hidden"
const elements2 = document.querySelectorAll('.hidden2')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements2.forEach((element) => myObserver.observe(element))

// MOSTRAR WHATSAPP QUANDO DESCER
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const alvo = document.getElementById('mostrarAoSair');

        if (!entry.isIntersecting) {
            // Remove possível classe de saída
            alvo.classList.add('hide');

            // Garante recomeçar animação
            void alvo.offsetWidth;

            // Adiciona a animação de entrada
            alvo.classList.remove('show');
        } else {
            // Remove animação de entrada
            alvo.classList.add('show');

            // Força reinício da animação
            void alvo.offsetWidth;

            // Adiciona a animação de saída
            alvo.classList.remove('hide');

            // Após animação, oculta o elemento
            alvo.addEventListener('animationend', function handler(e) {
                if (e.animationName === 'desaparecerSuave') {
                    alvo.style.display = 'none';
                    alvo.removeEventListener('animationend', handler);
                }
            });
        }
    });
});

const elemento = document.getElementById('inicio');
observer.observe(elemento);