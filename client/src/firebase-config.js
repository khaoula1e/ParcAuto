import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCs0k3t4AKVsNuEcTj1xxdH-ZAEWkm-5zs",
  authDomain: "parcauto-41532.firebaseapp.com",
  projectId: "parcauto-41532",
  storageBucket: "parcauto-41532.appspot.com",
  messagingSenderId: "505753115773",
  appId: "1:505753115773:web:e81c29f4d597c5a47be514",
  measurementId: "G-16NLCECN5T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const fs = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const user = firebase.auth().currentUser;

export {auth,fs,storage}