 let circle1=document.querySelector('#circle1');
 let circle2=document.querySelector('#circle2');
 let circle3=document.querySelector('#circle3');
 let appcontent_h1=document.querySelector('.appcontent_h1');
 let appcontent_p=document.querySelector('.appcontent_p');
 let contact_now=document.querySelector('.contact_now'); 
 let email=document.querySelector('input[type="email"]'); 

 circle1.addEventListener("click", function(){
    appcontent_h1.innerHTML = "Log in then determine the location and select the field";
    appcontent_p.innerHTML = "You Should determine your farm location to be able to use our app and benefit from our features.";
    circle3.style.backgroundColor='white';
    circle3.style.color='#4BA26A';
    circle3.style.border='2px solid #4BA26A';

    circle2.style.backgroundColor='white';
    circle2.style.color='#4BA26A';
    circle2.style.border='2px solid #4BA26A';

    circle1.style.backgroundColor='#4BA26A';
    circle1.style.color='white';

    });

   circle2.addEventListener("click", function(){
        appcontent_h1.innerHTML = "Select your crop that you want to follow";
        appcontent_p.innerHTML = "You Should add crop before using one of our features and when choosing a crop, useful information about this crop will appear.";

        circle1.style.backgroundColor='white';
        circle1.style.color='#4BA26A';
        circle1.style.border='2px solid #4BA26A';
    
        circle2.style.backgroundColor='#4BA26A';
        circle2.style.color='white';
    
        circle3.style.backgroundColor='white';
        circle3.style.color='#4BA26A';
        circle3.style.border='2px solid #4BA26A';
        
        });

    circle3.addEventListener("click", function(){
            appcontent_h1.innerHTML = "Choose one of our useful features";
            appcontent_p.innerHTML = "You Can choose the features that you want to determine in your crop to Facilitate your agricultural process.";
    
            circle1.style.backgroundColor='white';
            circle1.style.color='#4BA26A';
            circle1.style.border='2px solid #4BA26A';
        
            circle3.style.backgroundColor='#4BA26A';
            circle3.style.color='white';
        
            circle2.style.backgroundColor='white';
            circle2.style.color='#4BA26A';
            circle2.style.border='2px solid #4BA26A';
            
            });

contact_now.addEventListener("click", function(){
    var getValue= document.getElementById("the_email");
    if (getValue.value !="") {
        getValue.value = "";
    }
});

/* .email:focus{
    background-color: white;
    padding-left: 30px;

}
.email:placeholder-shown{
    padding-left: 30px;   
} */