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
