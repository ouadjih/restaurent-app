import{getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyA2eIKwr2CsOXnOrQv0vNuCZrU1owYn_sI",
  
    authDomain: "restaurentapp-56033.firebaseapp.com",
  
    databaseURL: "https://restaurentapp-56033-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "restaurentapp-56033",
  
    storageBucket: "restaurentapp-56033.appspot.com",
  
    messagingSenderId: "1018282582653",
  
    appId: "1:1018282582653:web:6f150cc4fc80961f178714"
  
};

const app = getApps.length > 0? getApp(): initializeApp(firebaseConfig) 
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};
