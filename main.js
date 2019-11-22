// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBTYh6pk5aSIW6hmJbRebRAqpSov2AU3tY",
  authDomain: "information-173c6.firebaseapp.com",
  databaseURL: "https://information-173c6.firebaseio.com",
  projectId: "information-173c6",
  storageBucket: "information-173c6.appspot.com",
  messagingSenderId: "485360154973",
  appId: "1:485360154973:web:4ce4f2e8cc0bfa8e6910b4",
  measurementId: "G-QPZSCC8W8L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Refference messeges collection
var messagesRef = firebase.database().ref("messages");

//Listen for form submit
document.getElementById("frmDataEntry").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();

  //Get values
  var name = getInputval("name");
  var email = getInputval("email");
  var message = getInputval("message");

  //save message
  saveMessage(name, email, message);
  document.getElementById("frmDataEntry").reset();

  //show aleret
  document.querySelector(".alert").style.display = "block";

  //Hide alert sfter 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}

//function to get form values
function getInputval(id) {
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message) {
  var newMessageref = messagesRef.push();
  newMessageref.set({
    name: name,
    email: email,
    message: message
  });
}

function recaptcha_callback() {
  let submit = document.getElementById("submit");
  submit.classList.remove("invisible");
}
