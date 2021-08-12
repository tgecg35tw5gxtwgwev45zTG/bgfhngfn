//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
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

    function send() {
      msg = document.getElementById("msg").nodeValue;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id); console.log(message_data); name = message_data['name']; message = message_data['message']; like = message_data['like']; name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
          window.location = "index.html";
    }