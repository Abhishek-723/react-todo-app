import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTU5tRk-RiMTPH3WDDHZDiyWqoX4P69P4",
    authDomain: "todo-app-cp-5009d.firebaseapp.com",
    projectId: "todo-app-cp-5009d",
    storageBucket: "todo-app-cp-5009d.appspot.com",
    messagingSenderId: "6553068443",
    appId: "1:6553068443:web:a3263430d53dd7cb56773e",
    measurementId: "G-YB8XQR7CN2"
});

const db = firebaseApp.firestore();

export default db;