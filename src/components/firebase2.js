import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBfsntxm-65VUwq6xLQng8srCi5ldJnH-s",
    authDomain: "react-contact-form-7abf5.firebaseapp.com",
    projectId: "react-contact-form-7abf5",
    storageBucket: "react-contact-form-7abf5.appspot.com",
    messagingSenderId: "501827539534",
    appId: "1:501827539534:web:2d88524ef0851908eba91f",


})

var db = firebaseApp.firestore();

export {db};
