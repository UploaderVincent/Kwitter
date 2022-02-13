
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBhfsFNs2K94D2AohhzIXOniB_hKp4SoGs",
      authDomain: "kwitter-5d923.firebaseapp.com",
      databaseURL: "https://kwitter-5d923-default-rtdb.firebaseio.com",
      projectId: "kwitter-5d923",
      storageBucket: "kwitter-5d923.appspot.com",
      messagingSenderId: "1049225380827",
      appId: "1:1049225380827:web:5ac825b9cf582d9eabddfe"
    };
    
    // Initialize Firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);

    }
    
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name- " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +" </div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);

window.location = "kwitter_page.html";

}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}