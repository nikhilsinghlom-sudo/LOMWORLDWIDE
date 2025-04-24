const container = document.querySelector('.workCards');

function getCards() {
    return Array.from(container.querySelectorAll('.workcard'));
}

container.addEventListener('click', (e) => {
    const card = e.target.closest('.workcard');
    if (!card) return;

    const cards = getCards();
    const isActive = card.classList.contains('active');
    const index = cards.indexOf(card);

    cards.forEach(c => c.classList.remove('active'));

    if (!isActive) {
        // If card is right side (odd), move it before its left sibling
        if (index % 2 !== 0) {
            container.insertBefore(card, cards[index - 1]);
        }

        card.classList.add('active');

        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
});
