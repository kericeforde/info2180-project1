/* Add your JavaScript to this file*/
const newsForm=document.querySelector("form");

const message= document.getElementsByClassName("message");
 

//Adding functionality to the form and submit button in the newsletter section//
newsForm.addEventListener("submit", function (e){
    e.preventDefault();
    
    const email= document.getElementById("email").value;
    
    if (email.trim()===""){
        message.innerHTML ="Please enter a valid email address." ;
       
     }
    else{
        message.innerHTML =`Thank you! Your email address ${email} has been added to our mailing list!`;
    }
} )