// Update WhatsApp group link
const whatsappLink = 'https://chat.whatsapp.com/LoOk6aSCYWG2puPoAGLhYT';
document.getElementById('whatsapp-link').href = whatsappLink;
document.getElementById('whatsapp-link-footer').href = whatsappLink;

// Image slider functionality
const slideContainer = document.querySelector('.slide-container');
let slideIndex = 0;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideContainer.children.length;
    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);

