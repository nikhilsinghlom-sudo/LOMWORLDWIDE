const hoverContainer = document.getElementById("hoverContainer");
const hoverImages = hoverContainer.querySelectorAll(".hover-image");
const slider = document.querySelector(".slider");
const allSlides = document.querySelectorAll(".slide");

function showHoverImages(slideEl) {
    const imageUrls = slideEl.dataset.images?.split(",") || [];

    hoverImages.forEach((img, index) => {
        img.src = imageUrls[index]?.trim() || "";
    });

    hoverContainer.classList.add("active");
    slider.classList.add("hover-active");

    allSlides.forEach(slide => slide.classList.remove("hovered"));
    slideEl.classList.add("hovered");
}

function hideHoverImages() {
    hoverContainer.classList.remove("active");
    slider.classList.remove("hover-active");
    allSlides.forEach(slide => slide.classList.remove("hovered"));
}


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

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        loop: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: false,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
