import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhMJdu0tPTEZam4wEX6lR7P2e6IMN5Bl4",
    authDomain: "todo-app-cp-eb6ad.firebaseapp.com",
    projectId: "todo-app-cp-eb6ad",
    storageBucket: "todo-app-cp-eb6ad.appspot.com",
    messagingSenderId: "559939314079",
    appId: "1:559939314079:web:9caed2c43374f30206ddaa",
    measurementId: "G-9WX68K82D3"
});

const db = firebaseApp.firestore();

export default db;