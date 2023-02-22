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




  let QUERY = encodeURIComponent(`*[_type == 'homeHeroSection']`);

  let URL = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'homeHeroSection'%5D`;

  fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          const heroHeading = document.querySelector("h1")
          const heroText = document.querySelector("main .wrapper p:nth-of-type(2)")
          console.log(result)

          heroHeading.textContent = result[0].heading
          heroText.textContent = result[0].text
        
})

                        
  let QUERYTWO = encodeURIComponent(`*[_type == 'homeSecondSection']`);

  let URLTWO = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'homeSecondSection'%5D`;

  fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
          const secondHeading = document.querySelector(".second-section h2")
          const secondSubText = document.querySelector(".second-section p:nth-of-type(1)")
          const secondText = document.querySelector(".second-section p:nth-of-type(2)")
          const secondTextTwo = document.querySelector(".second-section p:nth-of-type(3)")
          
          console.log(result)
          secondHeading.textContent = result[0].heading
          secondSubText.textContent = result[0].subHeading
          secondText.textContent = result[0].text
          secondTextTwo.textContent = result[0].textTwo
        
})








  let QUERYFOUR = encodeURIComponent(`*[_type == 'homeFourthSection']`);

  let URLFOUR = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'homeFourthSection'%5D`;

  fetch(URLFOUR)
        .then((res) => res.json())
        .then(({ result }) => {
          const fourthHeading = document.querySelector(".fourth-left h2")
          const fourthText = document.querySelector(".fourth-left > p")
          const listOneHeading = document.querySelector(".list-text:nth-of-type(1) p:nth-of-type(1)")
          const listTwoHeading = document.querySelector(".headingTwo")
          const listThreeHeading = document.querySelector(".headingThree")
          const listOneText = document.querySelector(".textOne")
          const listTwoText = document.querySelector(".textTwo")
          const listThreeText = document.querySelector(".textThree")


          fourthHeading.textContent = result[0].heading
          fourthText.textContent = result[0].subHeading
          listOneHeading.textContent = result[0].listOneTitle
          listTwoHeading.textContent = result[0].listTwoTitle
          listThreeHeading.textContent = result[0].listThreeTitle
          listOneText.textContent = result[0].listOneText
          listTwoText.textContent = result[0].listTwoText
          listThreeText.textContent = result[0].listThreeText
})

                        
  