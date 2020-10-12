import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTM2kHpazgumHZRHO38P5RpDZxdSHbkb8",
    authDomain: "instagram-clone-react-5ce06.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-5ce06.firebaseio.com",
    projectId: "instagram-clone-react-5ce06",
    storageBucket: "instagram-clone-react-5ce06.appspot.com",
    messagingSenderId: "1018660774198",
    appId: "1:1018660774198:web:4c2fff0b0d1f54a7205397",
    measurementId: "G-Q795T08HYL"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};