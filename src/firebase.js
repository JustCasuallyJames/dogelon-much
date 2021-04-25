import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAr22gMQy7FFjc3aPWs_9xyNfeuL_Pe7Js",
    authDomain: "dogelon-much.firebaseapp.com",
    databaseURL: "https://dogelon-much-default-rtdb.firebaseio.com",
    projectId: "dogelon-much",
    storageBucket: "dogelon-much.appspot.com",
    messagingSenderId: "368652789814",
    appId: "1:368652789814:web:9b5b8e011995e2ee93d097"
  };


var fire = firebase.initializeApp(firebaseConfig);
let db = fire.firestore();
export default db;