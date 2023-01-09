let backgrounds = ["background (1).jpg", "background (2).jpg", "background (3).jpg", "background (4).jpg", "background (5).jpg"]
let back = document.querySelector(".section1")
document.body.addEventListener("load", function () {
    let index = Math.floor(Math.random() * 5);
    back.style.background = 'url("' + backgrounds[index] + '")'
})
function change_background() {
    let index = Math.floor(Math.random() * 5);
    back.style.background = 'url("' + backgrounds[index] + '")'
    back.style.backgroundSize = "cover"
}
let find_spaces = document.querySelector(".find-spaces")
let solutions = document.querySelector(".Solutions")
let resources = document.querySelector(".Resources")

find_spaces.addEventListener("mouseenter", function () {
    console.log("Asdasd")
})