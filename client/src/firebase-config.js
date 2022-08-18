import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs0k3t4AKVsNuEcTj1xxdH-ZAEWkm-5zs",
  authDomain: "parcauto-41532.firebaseapp.com",
  databaseURL: "https://parcauto-41532-default-rtdb.firebaseio.com",
  projectId: "parcauto-41532",
  storageBucket: "parcauto-41532.appspot.com",
  messagingSenderId: "505753115773",
  appId: "1:505753115773:web:e81c29f4d597c5a47be514",
  measurementId: "G-16NLCECN5T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

