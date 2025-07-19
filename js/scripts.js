const items = [
    {
        text: "Entrega grátis na primeira compra",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png" // localização
    },
    {
        text: "Devolução gratuita em até 7 dias",
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png" // devolução
    },
    {
        text: "10% OFF na primeira compra com o cupom BEMVINDO",
        icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png" // desconto
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

// Auto troca a cada 2s
let interval = setInterval(() => {
    nextItem();
}, 3000);

function resetAutoPlay() {
    clearInterval(interval);
    interval = setInterval(() => {
        nextItem();
    }, 2000);
}

// Inicializa com o primeiro item
window.onload = () => updateContent(currentIndex);