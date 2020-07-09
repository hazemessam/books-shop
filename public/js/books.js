document.addEventListener('DOMContentLoaded', () => {
    // Handle selected book
    const overlay = document.querySelector('.overlay');
    const cards = document.querySelectorAll('.card');
    let selectedCard;
    
    const rmCurrentCard = () => {
        overlay.classList.remove('active');
        selectedCard.remove();
    }

    for (let card of cards) {
        card.addEventListener('click', () => {
            overlay.classList.add('active');
            selectedCard = card.cloneNode(true);
            selectedCard.classList.add('active');
            document.body.appendChild(selectedCard);
        });
    }
    
    overlay.addEventListener('click', rmCurrentCard);

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape")
            rmCurrentCard();
    })


    // make header fixed when scroll down
    const header = document.querySelector('header');
    document.addEventListener('scroll', () => {
        if (window.pageYOffset > window.outerHeight / 2)
            header.style.position = 'fixed';
        else
            header.style.position = 'static';
    });
});
