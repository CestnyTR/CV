window.addEventListener("wheel", function(event) {
  if (event.deltaY > 0) {
    var windowHeight = window.innerHeight;
    var fullHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var remainingHeight = fullHeight - (scrollTop + windowHeight);
    if (remainingHeight > windowHeight) {
      window.scrollBy(0, windowHeight);
    } else if (remainingHeight > 0) {
      window.scrollBy(0, remainingHeight);
    }
  }
  if (event.deltaY < 0) {
    var windowHeight = window.innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > windowHeight) {
      window.scrollBy(0, -windowHeight);
    } else if (scrollTop > 0) {
      window.scrollBy(0, -scrollTop);
    }
  }
});


//! Send Mail
function sendMail() {
  var params = {
    name: document.querySelector('#firstName').value,
    surname: document.querySelector('#surname').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };
  if (params.name.length >= 5 && params.surname.length >= 5 && params.email.length >= 5 && params.message.length >= 15) {
    const serviceID = "service_07nekqk";
    const templateID = "template_e8e9sm7";
    emailjs.send(serviceID, templateID, params).then(
      res => {
        document.querySelector('#firstName').value = "";
        document.querySelector('#surname').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#message').value = "";
      }).catch(err => console.log("Error" + err));
  } else alert("lütfen formu doldurunuz.");
}