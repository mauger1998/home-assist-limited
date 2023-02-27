const URL = "https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'latestNews'%5D%0A"

fetch(URL)
.then((res) => res.json())
.then(({ result }) => {
    const newsCards = document.querySelectorAll(".news-card")

    result.forEach((result, index) => {
        const firstP = document.createElement("p")
        firstP.textContent = result.cardTitle
        newsCards[index].appendChild(firstP)
        const secondP = document.createElement("p")
        secondP.textContent = result.cardText
        newsCards[index].appendChild(secondP)
        const enquireButton = document.createElement("button")
        enquireButton.textContent = "Enquire Now"
        newsCards[index].appendChild(enquireButton)
    })
    
})










                        
  