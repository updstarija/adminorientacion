
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth'
// import 'firebase/storage'; 


firebase.initializeApp({

  apiKey: "AIzaSyAzAdYf0g9JpmlSys65jyP2KaDTo8_-OG0",
  authDomain: "upds-test.firebaseapp.com",
  databaseURL: "https://upds-test.firebaseio.com",
  projectId: "upds-test",
  storageBucket: "upds-test.appspot.com",
  messagingSenderId: "1040806628187",
  appId: "1:1040806628187:web:7e75b7dee969c69a0d287e"


})

let db = firebase.firestore();
// db.settings({});
// var storage = firebase.storage().ref()
// export {storage}

var auth = firebase.auth()
export {firebase}
export {auth}

export default db;