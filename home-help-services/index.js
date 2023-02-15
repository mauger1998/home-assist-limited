const accordianItem = document.querySelectorAll(".accordian-item")
const answer = document.querySelectorAll(".answer")


accordianItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        answer[index].classList.toggle("active")
    })
})
