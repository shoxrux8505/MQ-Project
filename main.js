
let menuBtn = document.querySelector(".menu")
let menuList = document.querySelector(".menu-list")

menuBtn.addEventListener("click", ()=>{
    menuList.classList.toggle("active")
})