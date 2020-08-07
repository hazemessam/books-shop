// Go to top
const goToTop = () => window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    // Global variables
    const overlay = document.querySelector('.overlay');
    const cards = document.querySelectorAll('.card');
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    let selectedCard;
    

    // Remove current active card 
    const rmCurrentCard = () => {
        overlay.classList.remove('active');
        selectedCard.remove();
    }

    // Add active card
    for (let card of cards) {
        card.addEventListener('click', () => {
            overlay.classList.add('active');
            selectedCard = card.cloneNode(true);
            selectedCard.classList.add('active');
            main.appendChild(selectedCard);
        });
    }
    
    // Close active card when overlay is clicked
    overlay.addEventListener('click', rmCurrentCard);

    // Close active card when Esc is clicked
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape")
            rmCurrentCard();
    })

    // Make Header fixed
    header.style.position = 'fixed';
    header.style.top = '0';
    body.style.paddingTop = `${header.offsetHeight}px`;
});
