/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxm9j-e5HMwdvXomgwcaGqAgE6mNDj_Nm-JwgwkPqBzPDc-a12eYDM33WgYuFBsgzrk/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


var flag = 0

function containsSpecialChars(str) {
   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   return specialChars.test(str);
}

function containNumbers(str) {
   const numbers = /[1234567890]/;
   return numbers.test(str);
}

function ValidateEmail(mail) {
   const characters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (characters.test(mail)) {
      return true;
   } else {
      return false;
   }
}

function ValidateEmailSignature(mail) {
   const characters = /@/;
   if (characters.test(mail)) {
      return true;
   } else {
   }
}

function nameCheck() {
   var name = document.getElementById("name").value;
   name=name.trim()  ;
   if (name === "" || name === null || name === " ") {
      document.getElementById("error-name").innerHTML = "Provide a name";
      return false;
   } else {
      if (containsSpecialChars(name)) {
         document.getElementById("error-name").innerHTML = "Characters are not allowed";
         flag = 1;
         if (containNumbers(name)) {
            document.getElementById("error-number").innerHTML = "numbers are not allowed";
            return false;
         } else {
            document.getElementById("error-number").innerHTML = "";
            return true;
         }
      } else {
         document.getElementById("error-name").innerHTML = "";
         flag = 0;
         if (containNumbers(name)) {
            document.getElementById("error-number").innerHTML = "numbers are not allowed";
            return false;
         } else {
            document.getElementById("error-number").innerHTML = "";
            return true;
         }
      }
   }
}





function emailCheck() {
   var mail = document.getElementById("mail").value;
   mail=mail.trim();

   if (mail == "" || mail == null) {
      document.getElementById("error-mail").innerHTML = "provide proper mail id";
      return false;
   } else {
      if (ValidateEmail(mail)) {
         document.getElementById("error-mail").innerHTML = "";
         return true;
      } else {
         if (ValidateEmailSignature(mail)) {
            document.getElementById("error-mail").innerHTML = "Enter the remaining part after '@'";
            return false;
         } else {
            document.getElementById("error-mail").innerHTML = "Email should contain '@'";
            return false;
         }
      }
   }
}
function emptyCheckMessage() {
   var msg = document.getElementById("messages").value;
   msg=msg.trim();
   if (msg === "" || msg === null) {
      document.getElementById("errormessage").innerHTML = "This area should not be blank";
      return false;
   } else {
      document.getElementById("errormessage").innerHTML = "";
      return true;
   }
}



document.getElementById("submit-form").addEventListener(
   "submit",
   function (e) {
      e.preventDefault();
   },
   false
);

function validateForm() {
   if (!nameCheck()  || !emptyCheckMessage() || !emailCheck() || flag === 1) {
      document.getElementById("btn").innerHTML = "please complete all Required Fields";
      return false;
   } else {
      document.getElementById("btn").innerHTML = "submit";
      return true;
   }
}

function check() {
   console.log("nameCheck = " + nameCheck());
   console.log("emptyCheckSubject = " + emptyCheckSubject());
   console.log("emptyCheckMessage = " + emptyCheckMessage());
   console.log("emailCheck = " + emailCheck());
   console.log("validateForm =" + validateForm());
   console.log("emptyCheckSubj = " + emptyCheckSubj());
   return false;
}