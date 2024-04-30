// Step 1: obter elementos do DOM
let nextDom = document.getElementById('next');  // Próxima seta
let prevDom = document.getElementById('prev');  // Seta anterior

let carouselDom = document.querySelector('.carousel');  // Carrossel principal
let SliderDom = carouselDom.querySelector('.carousel .list');  // Lista de slides
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');  // Imagens de miniatura
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');  // Itens de miniatura

// Adiciona o primeiro item de miniatura
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 3000;  // Tempo para animações de transição

// Controle manual: removendo auto-play
// Sem setTimeout para transições automáticas

let runTimeOut;  // Gerenciador de tempo para resetar animações

// Evento de clique para seta de avançar
nextDom.onclick = function() {
    showSlider('next');  // Chama a função para mover para o próximo slide
};

// Evento de clique para seta de retroceder
prevDom.onclick = function() {
    showSlider('prev');  // Chama a função para mover para o slide anterior
};

// Função para mover o carrossel
function showSlider(type) {
    // Obter os slides e miniaturas
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    // Se for avançar
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);  // Mover primeiro para o final
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);  // Mover miniatura correspondente
        carouselDom.classList.add('next');  // Adiciona classe para animação
    } else {  // Se for retroceder
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);  // Mover último para o início
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);  // Mover miniatura correspondente
        carouselDom.classList.add('prev');  // Adiciona classe para animação
    }

    // Remover classes para animação após tempo definido
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');  // Remove classe 'next'
        carouselDom.classList.remove('prev');  // Remove classe 'prev'
    }, timeRunning);  // Tempo para remover animações
}
