import firebase from 'firebase/compat/app';
import { getFirestore} from "firebase/firestore";
import "firebase/compat/auth";

const firebaseSDK = firebase.initializeApp({
    apiKey : "" ,
    authDomain: "" ,
    projectId: "" ,
    storageBucket: "" ,
    messagingSenderId: "" ,
    appId: "",
    measurementId: ""
});

export const firebareAuth = firebaseSDK.auth();
export const firebaseDB = getFirestore(firebaseSDK);
export default firebaseSDK;

