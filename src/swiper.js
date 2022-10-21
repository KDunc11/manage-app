import { Swiper, Navigation, Pagination, Autoplay } from "swiper"
Swiper.use([Navigation, Pagination, Autoplay])

export const setupSwiper = () => {
  document.addEventListener("DOMContentLoaded", () =>{
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    })
  })
}
