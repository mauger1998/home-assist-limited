// CMS

let QUERY = encodeURIComponent(`*[_type == 'question']`);

let URL = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'question'%5D%0A%20%20`;

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          const accordian = document.querySelector(".accordian")
            result.forEach((result, index) => {
                const accordianItem = document.createElement("div")
                accordianItem.classList.add("accordian-item")
                accordian.appendChild(accordianItem)
                const accordianLink = document.createElement("div")
                accordianLink.classList.add("accordian-link")
                accordianLink.textContent = result.question
                accordianItem.appendChild(accordianLink)
                const add = document.createElement("p")
                add.classList.add("add")
                add.textContent = "+"
                const remove = document.createElement("p")
                remove.classList.add("remove")
                remove.textContent = "-"
                accordianLink.appendChild(add)
                accordianLink.appendChild(remove)
                const answer = document.createElement("div")
                answer.classList.add("answer")
                accordianItem.appendChild(answer)
                const p = document.createElement("p")
                p.textContent = result.answer
                answer.appendChild(p)
 });
                const accordianItem = document.querySelectorAll(".accordian-item")
                const answer = document.querySelectorAll(".answer")
                const plus = document.querySelectorAll(".add")
                const subtract = document.querySelectorAll(".remove")
                 accordianItem.forEach((item, index) => {
                    item.addEventListener("click", () => {
                        if (answer[index].classList.contains("active")) {
                            answer[index].classList.remove("active")
                        
                        } else {
                            answer[index].classList.add("active")
                        }

                        plus[index].classList.toggle("gone")
                        subtract[index].classList.toggle("here")
                    })
})

                        })


  let QUERYTWO = encodeURIComponent(`*[_type == 'servicesHeroSection']`);

  let URLTWO = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'servicesHeroSection'%5D`;

  fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
          const heroHeading = document.querySelector("h1")
          const heroText = document.querySelector(".main-left > p")
          console.log(result)

          heroHeading.textContent = result[0].heading
          heroText.textContent = result[0].text
        
})


let QUERYTHREE = encodeURIComponent(`*[_type == 'servicesSecondSection']`);

let URLTHREE = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'servicesSecondSection'%5D`;

fetch(URLTHREE)
      .then((res) => res.json())
      .then(({ result }) => {
        const secondHeading = document.querySelector(".second-section h2")
        const secondSubText = document.querySelector(".second-section p:nth-of-type(1)")
        const secondText = document.querySelector(".second-section p:nth-of-type(2)")
        

        secondHeading.textContent = result[0].heading
        secondSubText.textContent = result[0].subHeading
        secondText.textContent = result[0].text
      
})



let QUERYFOUR = encodeURIComponent(`*[_type == 'servicesThirdSection']`);

let URLFOUR = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'servicesThirdSection'%5D`;

fetch(URLFOUR)
      .then((res) => res.json())
      .then(({ result }) => {
        const thirdSubHeading = document.querySelector(".third-left p:nth-of-type(1)")
        const thirdText = document.querySelector(".third-left p:nth-of-type(2)")

        thirdSubHeading.textContent = result[0].subHeading
        thirdText.textContent = result[0].text
      
})

let QUERYFIVE = encodeURIComponent(`*[_type == 'servicesFourthSection']`);

let URLFIVE = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'servicesFourthSection'%5D`;

fetch(URLFIVE)
      .then((res) => res.json())
      .then(({ result }) => {
        const fourthHeading = document.querySelector(".fourth-left h2")
        const fourthText = document.querySelector(".fourth-left > p")

        fourthHeading.textContent = result[0].heading
        fourthText.textContent = result[0].text
      
})



let QUERYSIX = encodeURIComponent(`*[_type == 'howDoesItWork']`);

let URLSIX = `https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'howDoesItWork'%5D`;

fetch(URLSIX)
      .then((res) => res.json())
      .then(({ result }) => {
        const fifthHeading = document.querySelector(".fifth-right h2")
        const fifthSubHeading = document.querySelector(".fifth-right > p:nth-of-type(1)")
        const fifthTextOne = document.querySelector(".fifth-right > p:nth-of-type(2)")
        const fifthTextTwo = document.querySelector(".fifth-right > p:nth-of-type(3)")
        const fifthTextThree = document.querySelector(".fifth-right > p:nth-of-type(4)")

        fifthHeading.textContent = result[0].heading
        fifthSubHeading.textContent = result[0].subHeading
        fifthTextOne.textContent = result[0].textOne
        fifthTextTwo.textContent = result[0].textTwo
        fifthTextThree.textContent = result[0].textThree
      
})







