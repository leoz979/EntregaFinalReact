import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8psGE33nQz5DAQiM0zc65lv8gSIb9Sns",
  authDomain: "coderhouse-ecommerce-8ce36.firebaseapp.com",
  projectId: "coderhouse-ecommerce-8ce36",
  storageBucket: "coderhouse-ecommerce-8ce36.appspot.com",
  messagingSenderId: "285689479696",
  appId: "1:285689479696:web:77906f1d16ed5dcb928095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);