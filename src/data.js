//!TR
const TR_NavBarInfo = [
    { id: 1, page: "Hakkımda", link: "#about-me", target: "" },
    { id: 2, page: "Projelerim", link: "#MyProjects", target: "" },
    { id: 3, page: "Yeteneklerim", link: "#talent", target: "" },
    { id: 4, page: "Sertifikalar", link: "#certificate", target: "" },
    { id: 5, page: "Okul", link: "#school", target: "" },
    { id: 6, page: "Deneyimlerim", link: "#experience", target: "" },
    { id: 7, page: "Github", link: "https://github.com/CestnyTR", target: "_blank" },
]
const TR_HamburgerMenu = [
    { id: "Language", page: "Dil", link: "", target: "", onclick: "choiceLanguage" },
    { id: "Theme", page: "Tema", link: "", target: "", onclick: "choiceTheme" }
]
const TR_heads = [
    { id: 1, head: "İLETİŞİM" },
    { id: 2, head: "PROJELERIM" },
    { id: 3, head: "YETENEKLERIM(0-10)" },
    { id: 4, head: "SERTIFIKALAR" },
    { id: 5, head: "EĞITIM HAYATIM" },
    { id: 6, head: "DENEYIMLERIM" },
]

const TR_MeInfo = [
    { id: 1, info: "Merhaba, ben Junior Yazılım Geliştiricisiyim. JAVA, C# ASP.NET, HTML, CSS ve JavaScript dillerinde kendimi geliştirmeye çalışan bir yazılımcı olarak buradayım. Ayrıca PhotoShop'ta uzmanlaşmak için zaman ayirdigim gibi mobil programlamaya da ilgi duyuyorum. Web tasarimi ve oyun gelistirmesi ile de ilgiliyim; bu nedenle ISUBU Bilgisayar Programciligi bolumu mezunu oldugum icin bana farkli yetenekler kazandirdigini söyleyebiliriz." },
    { id: 2, info: "Son zamanlardaki en buyuk odak alanim Unreal engine 5; bu platformda yeni seyler denemeye calismam sayesinde hem eski teknolojiler hakkinda bilgi sahibi olmus hem de yenilerine hizlica adaptasyon sağlayabilmiş durumdayım.Bu arada web tasarima da cok merakli oldugumdan bunu da elbette egitmeye devam ediyorum - her gun baska birsey ogrenerek hayatinda istekli ve motivasyonlu tutmaya çalışıyorum!" },
    { id: 3, info: "  Bu sozlerle sadece yaptigim işlerden değil ayni zamanda neyi nasil elde etmek istedigime de vurgulama amacina ulasarak bitirecegimize emin olabilirsiniz: Kaliteli projelerde profesyonel sonuclara ulasmayla beraber orta-ust duzeydeki teknoloji becerisiyle donatılmış bir insan olarak tam anlaminda kariyerime devam ediyorum!" }
]
const TR_VideoProjectInfo = [
    { id: 1, projectName: "Zombi Oyunu", projectID: "ZombieGame", linkType: "Video" },
    { id: 2, projectName: "2D Platform Oyunu", projectID: "2DPlatformGame", linkType: "Video" },
    { id: 3, projectName: "3D Unity oyunu", projectID: "3DGame", linkType: "Video" },
    { id: 4, projectName: "3D UNREAL ENGİNE 5 Jet Uçuş Oyunu", projectID: "UE5JetFlight", linkType: "Video" },
]
const TR_LinkedProjectInfo = [
    { id: 1, projectName: "Photoshop Tasarımlarım", Link: "https://drive.google.com/drive/folders/1RTy6SjzyMEfllyCWfEzgsJf28Xt7YDAz", linkType: "Proje Linki" },
    { id: 2, projectName: "Java tabanlı kütüphane otomasyon sistemi", Link: "https://github.com/CestnyTR/JavaLibraryOtomation", linkType: "Proje Linki" },
    { id: 3, projectName: "C# çiftlik otomasyon sistemi", Link: "https://github.com/CestnyTR/CiftlikOtomasyon", linkType: "Proje Linki" },
    { id: 4, projectName: "GTA5 rp sunucuları için JS ile hazırlanmış market script", Link: "https://github.com/CestnyTR/GTA5-MARKET-SC", linkType: "Proje Linki" },
    { id: 5, projectName: "Word ile klavuz düzenleme", Link: "https://github.com/CestnyTR/handbookOfWordpress", linkType: "Proje Linki" },
    { id: 6, projectName: "C# ASP.NET ile hazırlanmış Kullanıcı Kayıt/giriş/List sitesi", Link: "https://github.com/CestnyTR/user-registary-inputs", linkType: "Proje Linki" }

]

const talents = [
    { id: 1, talentName: "HTML", talentPoint: "10" },
    { id: 2, talentName: "CSS", talentPoint: "8" },
    { id: 3, talentName: "JavaScript", talentPoint: "8" },
    { id: 4, talentName: "Unity", talentPoint: "6" },
    { id: 5, talentName: "Unreal Engine 5", talentPoint: "8" },
    { id: 6, talentName: "C#", talentPoint: "5" },
    { id: 7, talentName: "Asp.net", talentPoint: "5" },
    { id: 8, talentName: "JAVA", talentPoint: "5" },
    { id: 9, talentName: "Photoshop", talentPoint: "8" },
    { id: 10, talentName: "LUA", talentPoint: "4" },
    { id: 11, talentName: "Wordpress", talentPoint: "6" },
    { id: 12, talentName: "SQL", talentPoint: "7" },
    { id: 13, talentName: "Ardino", talentPoint: "1" },
    { id: 14, talentName: "Flutter", talentPoint: "1" }
]
const TR_certificates = [
    { id: 1, certificateDate: "25/05/2016", certificateName: "Bilgisayar Kullanımı", certificateNo: "76079520160046127826", certificationInstitution: "Konya/Karapınar(760795) Şehit Oğuzhan Aydınbelge Mesleki ve Teknik Anadolu Lisesi" },
    { id: 2, certificateDate: "26/12/2016", certificateName: "Bilişim Teknolojileri Donanım", certificateNo: "76079520170049473540", certificationInstitution: "Konya/Karapınar(760795) Şehit Oğuzhan Aydınbelge Mesleki ve Teknik Anadolu Lisesi" },
    { id: 3, certificateDate: "11/06/2017", certificateName: "Bilgisayar Sistem Bakım Onarım", certificateNo: "17768520170051032286", certificationInstitution: "Konya/Karapınar(177685) Karapınar Halk Eğitimi Merkezi" }
]
const TR_school = [
    { id: 1, schoolYear: "2015-2019", schoolName: "ŞEHİT OĞUZHAN AYDINBELGE MESLEKİ VE TEKNİK ANADOLU LİSESİ(KONYA-KARAPINAR)", schoolFaculty: "TEKNİK PROGRAMI BÖLÜM 6006 -BİLİŞİM TEKNOLOJİLERİ", schoolSection: "Dal:2-WEB PROGRAMCILIĞI", schoolDegree: "Diploma Notu: 83,55000/100" },
    { id: 2, schoolYear: "2020- 2022", schoolName: "ISPARTA UYGULAMALI BİLİMLER ÜNİVERSİTESİ", schoolFaculty: "TEKNİK BİLİMLER MYO", schoolSection: "BİLGİSAYAR PROGRAMCILIĞI", schoolDegree: "GNO: 3,58000/4" }
]

const TR_experiences = [
    { id: 1, experiencesTime: "1 Ay", business: "Atılım Bilgisayar", departman: "Teknik Servis", job: "Stajyer" },
    { id: 2, experiencesTime: "1 Ay", business: "Star Bilgisayar", departman: "Teknik Servis", job: "Stajyer" },
    { id: 3, experiencesTime: "1 Ay", business: "Mersin/Mut Belediyesi", departman: "Bilgi İşlem", job: "Stajyer" },
    { id: 4, experiencesTime: "1 Ay", business: "ESNAF VE SANATKARLAR KREDİ VE KEFALET KOOPERATİFİ", departman: "Bilgi İşlem", job: "Stajyer" },
    { id: 5, experiencesTime: "+4 Ay", business: "ARCSIM-Formula Simulator, Show Car, Airbus Simulator, Ralli Simulator. Motion Systems", departman: "Bilgi işlem", job: "Bilgisayar Programcısı" },
]
const TR_Contacts = [
    { id: "firstName", label: "İsim", minlength: "5", maxlength: "10" },
    { id: "surname", label: "Soyad", minlength: "5", maxlength: "10" },
    { id: "email", label: "Mail", minlength: "5", maxlength: "20" },
    { id: "message", label: "Mesaj", maxlength: "250" },
    { id: "submit", label: "MAİL GÖNDER" }
]

//!Eng
const EN_NavBarInfo = [
    { id: 1, page: "About me", link: "#about-me", target: "" },
    { id: 2, page: "My Project", link: "#MyProjects", target: "" },
    { id: 3, page: "Talents", link: "#talent", target: "" },
    { id: 4, page: "Certificate", link: "#certificate", target: "" },
    { id: 5, page: "Acedemic", link: "#school", target: "" },
    { id: 6, page: "Experiences", link: "#experience", target: "" },
    { id: 7, page: "Github", link: "https://github.com/CestnyTR", target: "_blank" },
]
const EN_HamburgerMenu = [
    { id: "Language", page: "Language", link: "", target: "", onclick: "choiceLanguage" },
    { id: "Theme", page: "Theme", link: "", target: "", onclick: "choiceTheme" }
]
const Language = [
    { id: 1, lang: "EN", Language: "English" },
    { id: 2, lang: "TR", Language: "Turkish" }
]
const Theme = [
    { id: 1, theme:"Dark" },
    { id: 2, theme:"Light" }
]

const EN_heads = [
    { id: 1, head: "CONTACT" },
    { id: 2, head: "MY PROJECT" },
    { id: 3, head: "TALENTS(0-10)" },
    { id: 4, head: "CERTIFICATE" },
    { id: 5, head: "ACEDEMIC LİFE" },
    { id: 6, head: "EXPERIENCES" },
]

const EN_MeInfo = [
    { id: 1, info: "Hello, I'm Junior Software Developer. I am here as a programmer trying to improve myself in JAVA, C# ASP.NET, HTML, CSS and JavaScript languages. I am also interested in mobile programming as I took the time to specialize in PhotoShop. I am also involved in web design and game development; For this reason, we can say that I am a graduate of ISUBU Computer Programming, and it has given me different abilities." },
    { id: 2, info: "My biggest focus lately is Unreal engine 5; By trying to try new things on this platform, I have both learned about old technologies and adapted quickly to new ones. By the way, since I am also very interested in web design, I continue to train it of course - I try to keep it motivated and motivated by learning something else every day!" },
    { id: 3, info: "With these words, you can be sure that we will finish by emphasizing not only the work I do, but also what I want to achieve and how: I continue my career fully as a person equipped with medium-high level technology skills, together with achieving professional results in quality projects!" }
]
const EN_VideoProjectInfo = [
    { id: 1, projectName: "Zombie Game", projectID: "ZombieGame", linkType: "Video" },
    { id: 2, projectName: "2D Platform Game", projectID: "2DPlatformGame", linkType: "Video" },
    { id: 3, projectName: "3D Unity Game", projectID: "3DGame", linkType: "Video" },
    { id: 4, projectName: "3D UNREAL ENGİNE 5 Fighter Jet Game", projectID: "UE5JetFlight", linkType: "Video" },
]
const EN_LinkedProjectInfo = [
    { id: 1, projectName: "Photoshop Desings", Link: "https://drive.google.com/drive/folders/1RTy6SjzyMEfllyCWfEzgsJf28Xt7YDAz", linkType: "Project Link" },
    { id: 2, projectName: "Java Based Library Automation System", Link: "https://github.com/CestnyTR/JavaLibraryOtomation", linkType: "Project Link" },
    { id: 3, projectName: "C# Farm Automation System", Link: "https://github.com/CestnyTR/CiftlikOtomasyon", linkType: "Project Link" },
    { id: 4, projectName: "Market script prepared with JS for GTA 5 rp servers", Link: "https://github.com/CestnyTR/GTA5-MARKET-SC", linkType: "Project Link" },
    { id: 5, projectName: "Guide Book", Link: "https://github.com/CestnyTR/handbookOfWordpress", linkType: "Project Link" },
    { id: 6, projectName: "User Registration/Login/List site prepared with C# ASP.NET", Link: "https://github.com/CestnyTR/user-registary-inputs", linkType: "Project Link" }

]

const EN_certificates = [
    { id: 1, certificateDate: "25/05/2016", certificateName: "Computer Certificate", certificateNo: "76079520160046127826", certificationInstitution: "Konya/Karapınar(760795) Şehit Oğuzhan Aydınbelge VOCATIONAL AND TECHNICAL ANATOLIAN HIGH SCHOOL" },
    { id: 2, certificateDate: "26/12/2016", certificateName: "Information Technologies Hardware", certificateNo: "76079520170049473540", certificationInstitution: "Konya/Karapınar(760795) Şehit Oğuzhan Aydınbelge VOCATIONAL AND TECHNICAL ANATOLIAN HIGH SCHOOL" },
    { id: 3, certificateDate: "11/06/2017", certificateName: "computer system maintenance repair", certificateNo: "17768520170051032286", certificationInstitution: "Konya/Karapınar(177685) Karapınar Public Education Center" }
]
const EN_school = [
    { id: 1, schoolYear: "2015-2019", schoolName: "ŞEHİT OĞUZHAN AYDINBELGE VOCATIONAL AND TECHNICAL ANATOLIAN HIGH SCHOOL(KONYA-KARAPINAR)", schoolFaculty: "TECHNICAL PROGRAM CHAPTER:6006-INFORMATION TECHNOLOGIES", schoolSection: "Branch:2-WEB PROGRAMMING", schoolDegree: "graduation grade: 83,55000/100" },
    { id: 2, schoolYear: "2020- 2022", schoolName: "ISPARTA APPLIED SCIENCES UNIVERSITY", schoolFaculty: "Technical Sciences VS", schoolSection: "COMPUTER PROGRAMMING", schoolDegree: "GNO: 3,58000/4" }
]

const EN_experiences = [
    { id: 1, experiencesTime: "1 Month", business: "Atılım Computer", departman: "technical service", job: "Intern" },
    { id: 2, experiencesTime: "1 Month", business: "Star Computer", departman: "technical service", job: "Intern" },
    { id: 3, experiencesTime: "1 Month", business: "Mersin/Mut city hall", departman: "Information Technology(IT)", job: "Intern" },
    { id: 4, experiencesTime: "1 Month", business: "SMALL BUSINESS AND ARTISAN CREDIT AND GUARANTEED COOPERATIVE", departman: "Information Technology(IT)", job: "Intern" },
    { id: 5, experiencesTime: "+4 Month", business: "ARCSIM - Formula Simulator, Show Car, Airbus Simulator, Ralli Simulator. Motion Systems", departman: "Information Technology(IT)", job: "Computer Programmer" },
]
const EN_Contacts = [
    { id: "firstName", label: "FIRSTNAME", minlength: "5", maxlength: "10" },
    { id: "surname", label: "SURNAME", minlength: "5", maxlength: "10" },
    { id: "email", label: "Mail", minlength: "5", maxlength: "20" },
    { id: "message", label: "MESSAGE", maxlength: "250" },
    { id: "submit", label: "SEND MAIL" }
]