const firebaseConfig = {
      apiKey: "AIzaSyD1Hn8FjGvX-bigXPuJHzj8JqD2dkDKEyI",
      authDomain: "kwitter-5cf82.firebaseapp.com",
      databaseURL: "https://kwitter-5cf82-default-rtdb.firebaseio.com",
      projectId: "kwitter-5cf82",
      storageBucket: "kwitter-5cf82.appspot.com",
      messagingSenderId: "898447634172",
      appId: "1:898447634172:web:3410770a7b6bdb2534f179",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";  
}