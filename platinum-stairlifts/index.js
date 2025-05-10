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















