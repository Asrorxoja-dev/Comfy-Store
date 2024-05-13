
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcYq4AGb0EscKV-P818_j0bOzGL1QCvnk",
  authDomain: "comfy-store-88825.firebaseapp.com",
  projectId: "comfy-store-88825",
  storageBucket: "comfy-store-88825.appspot.com",
  messagingSenderId: "919387707184",
  appId: "1:919387707184:web:adbafb3cd97b686b831af5"
};


const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)