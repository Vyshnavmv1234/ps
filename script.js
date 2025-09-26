var nameError=document.getElementById("name-error");
var emailError=document.getElementById("mail-error");
var subjectError=document.getElementById("subject-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");

function validateMessage(){
  var message=document.getElementById("message").value

  if(message.length == 0){
    messageError.innerHTML="message is required"
    messageError.style.color="red"
    return false;
  }
  messageError.innerHTML="";
  return true;
}
function validateSubject(){
  var subject=document.getElementById("subject").value

  if(subject.length == 0){
    subjectError.innerHTML="subject is required"
    subjectError.style.color="red"
    return false;
  }
  subjectError.innerHTML="";
  return true;
}


function validateName(){
  var name=document.getElementById("name").value

if(name.length==0){
  nameError.innerHTML="Name is required";
  nameError.style.color="red"
  return false;
}
if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
nameError.innerHTML="Write full name";
nameError.style.color="red"
return false;
}
nameError.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}
function validateMail(){
var mail=document.getElementById("mail").value;

if(mail.length==0){
emailError.innerHTML="Email is required";
emailError.style.color="red"
  return false;
}
if(!mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
  emailError.innerHTML = "Email Invalid"
  emailError.style.color="red"

  return false;
}
emailError.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}
function validateForm(event){
  event.preventDefault();
  if(!validateName() || !validateMail() || !validateSubject() || !validateMessage()){
    submitError.innerHTML='Check the error'
    submitError.style.color="red"
    return false; 
  }
let parms={
    subject:document.getElementById("subject").value,
    name:document.getElementById("name").value,
    mail:document.getElementById("mail").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_03aenw9", "template_a2anxgo", parms)
    .then(() => {
      document.querySelector(".sent-message").style.display = "block";
      document.querySelector(".error-message").style.display = "none";
    })
    .catch((err) => {
      document.querySelector(".error-message").innerHTML = "Failed to send: " + JSON.stringify(err);
      document.querySelector(".error-message").style.display = "block";
    });

  return false;
}
