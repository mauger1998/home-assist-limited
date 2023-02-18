const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween:10,
    autoplay: true,
    speed:400,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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


  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".second-section h2", {
      scrollTrigger: {
          trigger: ".second-section h2",
          start:"top bottom",
         
          
      },
      y:0,
      opacity:1,
  })