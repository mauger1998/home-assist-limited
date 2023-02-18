const accordianItem = document.querySelectorAll(".accordian-item")
const answer = document.querySelectorAll(".answer")
const add = document.querySelectorAll(".add")
const remove = document.querySelectorAll(".remove")

accordianItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        answer[index].classList.toggle("active")
        add[index].classList.toggle("gone")
        remove[index].classList.toggle("here")
    })
})

