const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween:10,
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


  // gsap.registerPlugin(ScrollTrigger);

  // gsap.to(".second-section h2", {
  //     scrollTrigger: {
  //         trigger: ".second-section h2",
  //         start:"top bottom",
         
          
  //     },
  //     y:0,
  //     opacity:1,
  // })



  let URLTWO = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'gallery'%5D%20%7B%0A%20%20%22imageUrl%22%3A%20gallery.asset-%3Eurl%0A%7D%0A%20%20`;


  fetch(URLTWO)
          .then((res) => res.json())
          .then(({ result }) => {
            const swiperAll = document.querySelectorAll(".swiper-slide img")
              result.forEach((result, index) => {
                  swiperAll[index].src = result.imageUrl
              })
          })