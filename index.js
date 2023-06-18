
// Modal




// Dropdown

document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})










                        
  let URL = "https://1t8q0n0t.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%20%22updateable%22%5D%20%7B%0A%20%20%22imgUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20title%2C%0A%20%20%20%20paragraph%0A%7D%0A%0A"

fetch(URL)
.then((res) => res.json())
.then(({ result }) => {
    const updateableSection = document.querySelector(".updateable")

    if (result.length > 0) {
        const title = document.createElement("h2")
        title.textContent = result[0].title
        updateableSection.appendChild(title)

        const paragraph = document.createElement("p")
        paragraph.textContent = result[0].paragraph
        updateableSection.appendChild(paragraph)

        const rockRight = document.querySelector(".rock-right img")
        rockRight.src = result[0].imgUrl

        const button = document.createElement("button")
        button.textContent = "See All Services"
        updateableSection.appendChild(button)
    }
})
.catch((err) => console.error(err));
