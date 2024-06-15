import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAnSoRZZjsPIO3sj7G5DR7jbAFz70wAKVE",
    authDomain: "projectxp-4e4ee.firebaseapp.com",
    projectId: "projectxp-4e4ee",
    storageBucket: "projectxp-4e4ee.appspot.com",
    messagingSenderId: "833598974488",
    appId: "1:833598974488:web:eaad61c8e9aef373fbb16d",
    measurementId: "G-90RPVVMPGC"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth() 
const provider = new GoogleAuthProvider() 
const db = getFirestore(app)

export {auth , provider, db }

