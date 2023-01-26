var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".AboutSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  function scrollHeader(){
    let navBottom = document.getElementById('header_menu')
    if(this.scrollY >= 50) navBottom.classList.add('main-menu-container'); else navBottom.classList.remove('main-menu-container')
  }
  window.addEventListener('scroll', scrollHeader)