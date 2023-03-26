const menuBtn=document.getElementById("hamburger")
const navList=document.getElementById("menu-list")
function menuBtnClick(){
navList.classList.toggle("show")}menuBtn.addEventListener("click",menuBtnClick)