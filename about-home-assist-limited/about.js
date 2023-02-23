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


//   let QUERY = encodeURIComponent(`[_type == 'aboutHeroSection']`);

//   let URL = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'aboutHeroSection'%5D`;

//   fetch(URL)
//         .then((res) => res.json())
//         .then(({ result }) => {
//           const heroHeading = document.querySelector("h1")
//           const heroText = document.querySelector(".main-left > p")
          

//           heroHeading.textContent = result[0].heading
//           heroText.textContent = result[0].text
        
// })

// let QUERYTWO = encodeURIComponent(`*[_type == 'aboutSecondSection']`);

// let URLTWO = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'aboutSecondSection'%5D`;

// fetch(URLTWO)
//       .then((res) => res.json())
//       .then(({ result }) => {
//         const secondHeading = document.querySelector(".second-section h2")
//         const secondText = document.querySelector(".second-section p")
        

//         secondHeading.textContent = result[0].heading
//         secondText.textContent = result[0].text
      
// })


// let QUERYFOUR = encodeURIComponent(`*[_type == 'aboutThirdSection']`);

// let URLFOUR = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'aboutThirdSection'%5D`;

// fetch(URLFOUR)
//       .then((res) => res.json())
//       .then(({ result }) => {
//         const thirdHeading = document.querySelector(".third-right h2")
//         const thirdSubHeading = document.querySelector(".third-right p:nth-of-type(1)")
//         const thirdText = document.querySelector(".third-right p:nth-of-type(2)")
//         const thirdSecondText = document.querySelector(".third-right p:nth-of-type(3)")

//         thirdHeading.textContent = result[0].heading
//         thirdSubHeading.textContent = result[0].subHeading
//         thirdText.textContent = result[0].text
//         thirdSecondText.textContent = result[0].textTwo
      
// })