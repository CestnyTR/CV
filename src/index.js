// const menuBtn=document.getElementById("hamburger")
// const navList=document.getElementById("menu-list")
// function menuBtnClick(){
// navList.classList.toggle("show")}menuBtn.addEventListener("click",menuBtnClick)


//! Send Mail
function sendMail() {
  var params = {
    name: document.querySelector('#firstName').value,
    surname: document.querySelector('#surname').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };

  const serviceID = "service_07nekqk";
  const templateID = "template_e8e9sm7";
  emailjs.send(serviceID, templateID, params).then(
    res => {
      document.querySelector('#firstName') = "";
      document.querySelector('#surname') = "";
      document.querySelector('#email') = "";
      document.querySelector('#message') = "";
    }).catch(err => console.log(err));
}