// window.addEventListener("wheel", function(event) {
//   if (event.deltaY > 0) {
//     var windowHeight = window.innerHeight;
//     var fullHeight = document.documentElement.scrollHeight;
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     var remainingHeight = fullHeight - (scrollTop + windowHeight);
//     if (remainingHeight > windowHeight) {
//       window.scrollBy(0, windowHeight);
//     } else if (remainingHeight > 0) {
//       window.scrollBy(0, remainingHeight);
//     }
//   }
//   if (event.deltaY < 0) {
//     var windowHeight = window.innerHeight;
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > windowHeight) {
//       window.scrollBy(0, -windowHeight);
//     } else if (scrollTop > 0) {
//       window.scrollBy(0, -scrollTop);
//     }
//   }
// });
function hamburgerMenu() {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
}
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

//? pop up
function openPopup() {
  let listingElement = document.getElementById("popup-wrap");
  listingElement.style.display = "flex"

  setTimeout(() => {
    listingElement.style.backdropFilter = " blur(4px)";

    listingElement.style.opacity = "1"
  }, 10);
}
function closePopup() {
  let listingElement = document.getElementById("popup-wrap");
  listingElement.style.display = "none"
  setTimeout(() => {
    listingElement.style.opacity = "0"
  }, 10);
}

function openUE5JetFlightPopup() {
  let innerHTML = ""
  innerHTML += ` 
  <div id="popup-container">
  <iframe src="https://www.youtube.com/embed/HqkyMcq5jUo" title="YouTube video player" allowfullscreen></iframe>
  </div> `;
  document.getElementById("popup-wrap").innerHTML = innerHTML

  openPopup()
}
function open3DGamePopup() {
  let innerHTML = ""
  innerHTML += ` 
  <div id="popup-container">
  <iframe src="https://www.youtube.com/embed/OyGkYBsPvCE" title="YouTube video player" allowfullscreen></iframe>
  </div> `;
  document.getElementById("popup-wrap").innerHTML = innerHTML
  openPopup()
}
function open2DPlatformGamePopup() {
  let innerHTML = ""
  innerHTML += ` 
  <div id="popup-container">
  <iframe src="https://www.youtube.com/embed/q3xA2NjmzSk" title="YouTube video player" allowfullscreen></iframe>
  </div> `;
  document.getElementById("popup-wrap").innerHTML = innerHTML
  openPopup()
}
function openZombieGamePopup() {
  let innerHTML = ""
  innerHTML += ` 
  <div id="popup-container">
  <iframe src="https://www.youtube.com/embed/I_yWLWi_Zm8" title="YouTube video player" allowfullscreen></iframe>
  </div> `;
  document.getElementById("popup-wrap").innerHTML = innerHTML
  openPopup()
}
function choiceLanguageShow() {
  let listingElement = document.getElementById("langShow");
  listingElement.style.display = "flex";
  setTimeout(() => {
    listingElement.style.opacity = "1"
  }, 10);
}
function choiceThemeShow() {
  let listingElement = document.getElementById("themeShow");
  listingElement.style.display = "flex"

  setTimeout(() => {
    listingElement.style.opacity = "1"
  }, 10);
}
function EnglishShow(){
  document.cookie = "EN";
  choiceLanguage()
}
function TurkishShow(){
  document.cookie = "TR";
  choiceLanguage()
}
choiceLanguage()
function choiceLanguage() {
  let lang = decodeURIComponent(document.cookie);

  switch (lang) {
    case "TR":
      buildlang(TR_HamburgerMenu, TR_NavBarInfo, Language, Theme, TR_heads, TR_MeInfo, TR_VideoProjectInfo, TR_LinkedProjectInfo, talents, TR_certificates, TR_school, TR_experiences, TR_Contacts)
      lang = decodeURIComponent(document.cookie);
      console.log(lang)
      break;
    case "EN":
      buildlang(EN_HamburgerMenu, EN_NavBarInfo, Language, Theme, EN_heads, EN_MeInfo, EN_VideoProjectInfo, EN_LinkedProjectInfo, talents, EN_certificates, EN_school, EN_experiences, EN_Contacts)
      lang = decodeURIComponent(document.cookie);
      console.log(lang)

      break;
    default:
      buildlang(EN_HamburgerMenu, EN_NavBarInfo, Language, Theme, EN_heads, EN_MeInfo, EN_VideoProjectInfo, EN_LinkedProjectInfo, talents, EN_certificates, EN_school, EN_experiences, EN_Contacts)
      document.cookie = "EN";
      lang = decodeURIComponent(document.cookie);
  }
}
//!Build TR Website
function buildlang(hamburgerMenuData, navBarData, languageData, themeData, heads, meInfoData, VideoProjectData, LinkedProjectData, talentsData, certificatesData, schoolData, experiencesData, contactsData) {
  //!NavBar
  let navBarHTML = ``
  for (let i = 0; i < navBarData.length - 1; i++) {
    navBarHTML += ` 
    <li><a href="${navBarData[i].link}" target="${navBarData[i].target}">${navBarData[i].page}</a></li>
  `;
  }
  navBarHTML += ` 
  <li><a href="https://github.com/CestnyTR" > Github </a> </li> 
  `
  {/* <button class="dropbtn">Language</button><div id="dropdown-content"></div> */ }
  navBarHTML += `  <div class="dropdown">
  <button class="dropbtn"><img src="images/hamburger.png" alt="hamburger"></button>
  <div id="dropdown-content"> `;

  for (let i = 0; i < hamburgerMenuData.length; i++) {
    navBarHTML += ` 
  <div class="dropbtn" id="${hamburgerMenuData[i].id}" onclick="${hamburgerMenuData[i].onclick}Show()">${hamburgerMenuData[i].page}</div>
`;
    if (hamburgerMenuData[i].id == "Language") {
      navBarHTML+=`<div id="langShow">`;
      for (let i = 0; i < languageData.length; i++) {
        navBarHTML += ` 
        
    <div class="dropbtnLang" id="${languageData[i].id}" onclick="${languageData[i].Language}Show()">${languageData[i].Language}</div>
  `;
      }
      navBarHTML += `</div> `
    }
    if (hamburgerMenuData[i].id == "Theme") {
      navBarHTML+=`<div id="themeShow">`;

      for (let i = 0; i < themeData.length; i++) {
        navBarHTML += ` 
    <div class="dropbtnTheme" id="${themeData[i].id}" onclick="${themeData[i].theme}Theme()">${themeData[i].theme}</div>
  `;
      } navBarHTML += `</div> `
    }
  }

  navBarHTML += `</div>`
  document.getElementById("menu-list").innerHTML = navBarHTML

  //!me info data
  let meInfoHTML = ""
  for (let i = 0; i < meInfoData.length; i++) {
    meInfoHTML += ` 
  <p>${meInfoData[i].info}</p> 
   `;
  }
  meInfoHTML += `  <button class="btn" onclick="window.scrollBy(0, 10000)">
  <span>${heads[0].head}</span>
  <div class="container">
    <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"
      class="icon">
      <path fill=""
        d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z">
      </path>
    </svg>
    <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"
      class="icon">
      <path fill=""
        d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z">
      </path>
    </svg>
    <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"
      class="icon">
      <path fill=""
        d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z">
      </path>
    </svg>
  </div>
</button>`
  document.getElementById("me-info").innerHTML = meInfoHTML

  //!project data
  //?video
  let VideoProjectHTML = ` <div class="header"><a name="MyProjects">${heads[1].head}</a></div>`
  for (let i = 0; i < VideoProjectData.length; i++) {
    VideoProjectHTML += ` 
  <div class="project">
  <div class="projectName">${VideoProjectData[i].projectName}</div>
  <div class="projectLink" id="${VideoProjectData[i].projectID}" onclick="open${VideoProjectData[i].projectID}Popup()">
  ${VideoProjectData[i].linkType}
  </div></div>
  `;
  }
  //?Link 
  document.getElementById("MyProjects-wrap").innerHTML = VideoProjectHTML
  let LinkedProjectHTML = VideoProjectHTML;
  for (let i = 0; i < LinkedProjectData.length; i++) {
    LinkedProjectHTML += ` 
  <div class="project">
  <div class="projectName">${LinkedProjectData[i].projectName}</div>
  <div class="projectLink">
    <a href="${LinkedProjectData[i].Link}" target="_blank">${LinkedProjectData[i].linkType}</a>
  </div></div>
`;
  }
  document.getElementById("MyProjects-wrap").innerHTML = LinkedProjectHTML

  //!talents
  let talentsInnerHTML = `<div class="header"><a name="talent">${heads[2].head}</a></div>`;
  for (let i = 0; i < talentsData.length; i++) {
    talentsInnerHTML += ` 
  <div class="talent">
  <div class="talentName">${talentsData[i].talentName}</div>
  <div class="talentPoint">${talentsData[i].talentPoint}</div>
</div>
`;
  }
  document.getElementById("talents-wrap").innerHTML = talentsInnerHTML

  //!certificates

  let certificatesInnerHTML = `<div class="header"><a name="certificate">${heads[3].head}</a></div>`;
  for (let i = 0; i < certificatesData.length; i++) {
    certificatesInnerHTML += ` 
  <div class="certificate">
      <div class="certificateDate">${certificatesData[i].certificateDate}</div>
      <div class="certificateName">${certificatesData[i].certificateName}</div>
      <div class="certificateNumber">${certificatesData[i].certificateNo}</div>
      <div class="certificationInstitution">
      ${certificatesData[i].certificationInstitution}
      </div>
    </div>
`;
  }
  document.getElementById("certificates-wrap").innerHTML = certificatesInnerHTML

  //!School

  let schoolInnerHTML = `<div class="header"><a name="school">${heads[4].head}</a></div>`;
  for (let i = 0; i < schoolData.length; i++) {
    schoolInnerHTML += ` 
  <div class="school">
      <div class="schoolYear">${schoolData[i].schoolYear}</div>
      <div class="schoolName">
        <p>
        ${schoolData[i].schoolName}
        </p>
        <p>  ${schoolData[i].schoolFaculty}</p>
        <p>  ${schoolData[i].schoolSection}</p>
      </div>
      <div class="schoolDegree">${schoolData[i].schoolDegree}</div>
    </div>
`;
  }
  document.getElementById("school-wrap").innerHTML = schoolInnerHTML

  //!experiences

  let experiencesInnerHTML = `<div class="header"><a name="experience">${heads[5].head}</a></div>`;
  for (let i = 0; i < experiencesData.length; i++) {
    experiencesInnerHTML += ` 
  <div class="experience">
      <div class="experience">
        <div class="experienceTime"><p>${experiencesData[i].experiencesTime}</p></div>
        <div class="business"><p>${experiencesData[i].business}</p> <p>${experiencesData[i].departman}</p></div>
        <div class="job"><p>${experiencesData[i].job}</p></div>
      </div>
  </div>
`;
  }
  document.getElementById("experiences-wrap").innerHTML = experiencesInnerHTML

  //!contact
  let contactInnerHTML = ` <form action="">
<div class="header">${heads[0].head}</div>`;
  for (let i = 0; i < contactsData.length - 2; i++) {

    contactInnerHTML += ` 
  <div class="input-group">
  <input required="" type="text" name="text" autocomplete="off" class="input" id="${[contactsData[i].id]}" minlength="${[contactsData[i].minlength]}" maxlength="${[contactsData[i].maxlength]}">
  <label class="user-label">${[contactsData[i].label]}</label>
</div>
`;
  }

  contactInnerHTML += ` 
  <div class="input-group">
  <textarea required="" type="text" name="text" class="input" maxlength="${[contactsData[contactsData.length - 2].maxlength]}" id="${[contactsData.slice(-2).id]}"></textarea>
        <label class="user-label">${[contactsData[contactsData.length - 2].label]}</label>
      </div>
      <div class="button" id="${[contactsData[contactsData.length - 1].id]}" onclick="sendMail()">

`;
  contactInnerHTML += `
<button class="learn-more" onclick="sendMail()">
<span class="circle" aria-hidden="true">
<span class="icon arrow"></span>
</span>
<span class="button-text">${contactsData[contactsData.length - 1].label}</span>
</button>
`;
  contactInnerHTML += `</div></form>`
  document.getElementById("contact-wrap").innerHTML = contactInnerHTML

}
//! Theme
function DarkTheme(){
 document.body.style.backgroundColor="#414141";
}
