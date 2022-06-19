username = localStorage.getItem("username");
document.getElementById('usernam').innerHTML = username;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyApS4cfF8AbAALYEzLeeCSpYXkWQmwF-oA",
  authDomain: "lets-chat-web-app-fad5d.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-fad5d-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-fad5d",
  storageBucket: "lets-chat-web-app-fad5d.appspot.com",
  messagingSenderId: "486099983077",
  appId: "1:486099983077:web:ad8ece32a75ec7e408920c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom()
{
  room = document.getElementById('roomname').value;
  firebase.database().ref("/").child(username).update({
    Roomname:room,
    User:username
  })
  document.getElementById('roomname').value = "";
}