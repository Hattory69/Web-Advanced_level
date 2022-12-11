let mainLoading = gsap.timeline({defaults: {duration: .5, opacity: 1, visibility: "visible" } });

mainLoading
.to('.main-content__title', {y: '0%', delay: .5})
.to('.main-content__btn', {y: '0%'}, '<')
.to('.main-content__descr', {delay: .2}, '<')
.to('.gsap__photo', {stagger: .4, delay: .3}, '<')
.to('.gsap__main-photo', {scale: 1, duration: .5}, '<')
.to('.gsap__main-photo', {scale: 1, duration: .5}, '<')
.to('.main-content__author', {duration: .7}, '<.3')




const burgerBtn = document.querySelector(".header__burger");
const burgerInner = document.querySelector('.burger');

let burgerOpen = false;
let timeline = gsap.timeline({defaults: {duration: 0.3, opacity: 1, visibility: "visible" } });

burgerBtn.addEventListener("click", () => {
  if (burgerOpen == false) {
    burgerBtn.classList.toggle("active");
    burgerInner.classList.toggle("active");

    timeline.play()

    timeline
      .to(".header__burger-active", { y: "100%" })
      .to(".burger", { y: "-10%" }, "<")
      .to(".burger__nav", { y: "0%", delay: 0.1 })
      .to(".burger__right", { y: "0%", delay: 0.2 })
      .to(".burger__social", { y: "0%" }, "<");

    burgerOpen = true;
  } else {
    timeline.timeScale(3)
    timeline.reverse()
    burgerOpen = false
    burgerBtn.classList.toggle("active")
    burgerInner.classList.toggle("active");
  }
});
