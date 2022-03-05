

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAZF3N3vYRvrbXmPsoaha4M8JkXn_ApLY8",
    authDomain: "hirasadanglobal-b5ed4.firebaseapp.com",
    projectId: "hirasadanglobal-b5ed4",
    storageBucket: "hirasadanglobal-b5ed4.appspot.com",
    messagingSenderId: "966106968153",
    appId: "1:966106968153:web:a63237ce3e57ecb4674148",
    measurementId: "G-BLQQ6543S9",
    databaseURL: "https://hirasadanglobal-b5ed4-default-rtdb.firebaseio.com/" 
  };

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messageRef = firebase.database().ref("contactForm");






// Listen for from Contact Form
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    let name = getInputValue('contactname');
    let email = getInputValue('contactemail');
    let country = getInputValue('contactcountry');  
    let phone = getInputValue('contactnumber');
    let message = getInputValue('contactmessage');

    saveMessage("contactForm" , name , email , country , phone , message);
        
}

function getInputValue(id){
    return document.getElementById(id).value ; 
}

function saveMessage(type , name , email , country , phone , message){

    var newMessageRef = messageRef.push();

    newMessageRef.set({
       type : type,
       name : name , 
       email : email , 
       country : country ,
       phone : phone , 
       message : message
    });
 
   console.log(newMessageRef);
    document.getElementById("contactForm").reset();
    document.getElementById("sent-message").style.display = "block";


}