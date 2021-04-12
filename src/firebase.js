// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC4t70W59kI0GZ0Mdqg--E-1KBsqTro0V8",
    authDomain: "my--clone-29364.firebaseapp.com",
    projectId: "my--clone-29364",
    storageBucket: "my--clone-29364.appspot.com",
    messagingSenderId: "444159348047",
    appId: "1:444159348047:web:df69de597f271da662893a",
    measurementId: "G-9ZD0YD3H53"
  };

  const firbaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};