const firebaseConfig = {
    apiKey: "AIzaSyAyT8lOdMPV8psEdgMvfs17f6SmASGS8Kg",
    authDomain: "class-test-2fa45.firebaseapp.com",
    projectId: "class-test-2fa45",
    storageBucket: "class-test-2fa45.appspot.com",
    messagingSenderId: "402035720175",
    appId: "1:402035720175:web:233794660599f6e889001a"
  };

  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;



});});}
getData();