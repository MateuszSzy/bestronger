import firebase from "firebase/compat";



const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCT5DItopQftt54xmqVh60XTJMA2vnpHrI",
    authDomain: "bestrong-test.firebaseapp.com",
    projectId: "bestrong-test",
    storageBucket: "bestrong-test.appspot.com",
    messagingSenderId: "271189584872",
    appId: "1:271189584872:web:056f13a130f1c52d71d25d",
    measurementId: "G-40BF4EG4X2"
    });

const db = firebaseApp.firestore();

export {db};
