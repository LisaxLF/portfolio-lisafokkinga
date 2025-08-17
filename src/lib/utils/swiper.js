export function swiper(container) {
    // Initialize Swiper for the project showcase carousel
    new Swiper(container, {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 100,
        loop: true,
        navigation: {
            nextEl: container.querySelector('.next-btn'),
            prevEl: container.querySelector('.prev-btn')
        },
        breakpoints: {
            1000: {
                slidesPerView: 3
            },
            800: {
                slidesPerView: "auto"
            }
        }
    });
}