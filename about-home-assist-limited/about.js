const URL = "https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'teamMember'%5D%7B%0A%20%20position%2C%0A%20%20name%2C%0A%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D"

  fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          const grid = document.querySelector(".meet-team-grid")

          result.forEach((result, index) => {
            const gridItem = document.createElement("div")
            gridItem.classList.add("team-item")
            grid.appendChild(gridItem)
            const gridImage = document.createElement("img")
            gridImage.src = result.imageUrl
            gridItem.appendChild(gridImage)
            const memberName = document.createElement("p")
            memberName.textContent = result.name
            gridItem.appendChild(memberName)
            const memberPosition = document.createElement("p")
            memberPosition.textContent = result.position
            gridItem.appendChild(memberPosition)
            
})
        
})

const URLTWO = "https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'teamImage'%5D%20%7B%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D%0A"


fetch(URLTWO)
.then((res) => res.json())
.then(({ result }) => {
    const secondRight = document.querySelector(".second-right")

    console.log(result[0].imageUrl)

    secondRight.style.backgroundImage = `linear-gradient(to top, #FFFFFF, #FFFFFF00 10%), linear-gradient(to right, #FFFFFF, #FFFFFF00 10%), linear-gradient(to bottom, #FFFFFF, #FFFFFF00 10%), url(${result[0].imageUrl})`
})

