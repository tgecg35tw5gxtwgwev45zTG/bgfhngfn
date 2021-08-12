
  //ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
  apiKey: "AIzaSyANFjQMiuwblVCGsLt4GOP4mo7PlXcqhy8",
  authDomain: "swifter-3ba7a.firebaseapp.com",
  databaseURL: "https://swifter-3ba7a-default-rtdb.firebaseio.com",
  projectId: "swifter-3ba7a",
  storageBucket: "swifter-3ba7a.appspot.com",
  messagingSenderId: "722771011535",
  appId: "1:722771011535:web:fd05a54de2a269620054ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "swifter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "swifter_page.html";
}
function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
      window.location = "index.html";
}