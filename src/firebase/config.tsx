import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyArvCVp7GUrCAP2P4uN-RX-iX9l8tvFyjs",
    authDomain: "chat-app-5a846.firebaseapp.com",
    projectId: "chat-app-5a846",
    storageBucket: "chat-app-5a846.appspot.com",
    messagingSenderId: "509638711194",
    appId: "1:509638711194:web:815a27a3bc30e2c7e7cc23",
    measurementId: "G-5HEPF3WGCS"
  };

//   intializing firebase
initializeApp(firebaseConfig)

//   intializing firebase Auth
const auth = getAuth()

//   intializing firestore
const db = getFirestore()

export{db,auth}

