// const menuBtn=document.getElementById("hamburger")
// const navList=document.getElementById("menu-list")
// function menuBtnClick(){
// navList.classList.toggle("show")}menuBtn.addEventListener("click",menuBtnClick)


//! Send Mail
const form = document.querySelector('form');
const firstNameInput = document.querySelector('#firstName');
const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit');

// function sendEmail(firstName, surname, email, message) {
//     console.log(`Name: ${firstName},Surname ${surname}, Email: ${email}, Message: ${message}`);

// }

function sendEmail() {
    // Gmail API'ye erişmek için gerekli kimlik doğrulama bilgileri
    var CLIENT_ID = '241946738923-4euldm690g73uk75jmlddjoqps421tat.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyADgwpDiftHSibdaW5KUbudEAl5fiEAqXY';
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
    var SCOPES = 'https://www.googleapis.com/auth/gmail.send';
  
    // API kütüphanesi yüklenir
    gapi.load('client:auth2', function() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function() {
        // Kimlik doğrulama işlemi tamamlandıktan sonra gönderim işlemi gerçekleştirilir
        sendMessage();
      });
    });
  
    // E-posta gönderimi için gerekli bilgiler
    function sendMessage() {
      var to = "fahriaydin47@gmail.com";
      var subject = "735cestnyfarm1@gmail.com";
      var message = "This is a test email sent from Gmail API.";
  
      var email = [
        'Content-Type: text/plain; charset="UTF-8"\n',
        'MIME-Version: 1.0\n',
        'Content-Transfer-Encoding: 7bit\n',
        'to: ' + to + '\n',
        'subject: ' + subject + '\n\n',
        message
      ].join('');
  
      // E-posta gönderimi için Gmail API isteği yapılır
      var request = gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
          'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
        }
      });
  
      request.execute(function(response) {
        console.log(response);
        alert('E-posta başarıyla gönderildi.');
      });
    }
  }
submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Sayfa yenilemesini önlemek için formun varsayılan davranışını engelleyin.
    const firstName = firstNameInput.value;
    const surname = surnameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    sendEmail();
    form.reset(); // Formu sıfırlayın.
});


