const items = [
    {
        text: "Entrega grátis na primeira compra",
        icon: "../imgs/iconesBanner/caminhao-sofa.png" // Entrega
    },
    {
        text: "Parcele em até 6x no cartão",
        icon: "../imgs/iconesBanner/cartao-de-credito.png" // Cartão
    },
    {
        text: "Compra 100% segura",
        icon: "../imgs/iconesBanner/verificacao-de-escudo.png" // Escudo
    }
];
let currentIndex = 0;
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
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateContent(currentIndex);
    resetAutoPlay();
}

function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    updateContent(currentIndex);
    resetAutoPlay();
}

// Auto troca a cada 3s
let interval = setInterval(() => {
    nextItem();
}, 3000);

function resetAutoPlay() {
    clearInterval(interval);
    interval = setInterval(() => {
        nextItem();
    }, 3000);
}

// Inicializa com o primeiro item
window.onload = () => updateContent(currentIndex);