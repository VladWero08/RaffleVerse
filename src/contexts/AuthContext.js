import React, { useContext, useState, useEffect } from 'react';
import { firebareAuth, firebaseDB } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    // User-ul curent
    const [currentUser, setCurrentUser] = useState({})

    // Functie pentru log in --> firebase auth
    function logIn(email,password){
        return firebareAuth.signInWithEmailAndPassword(email,password);
    }

    // Functie pentru creare cont de auth & user in users
    function signUp(name, email, password, metamask){
        firebareAuth.createUserWithEmailAndPassword(email,password).then(()=>{
            addDoc(collection(firebaseDB, "users"), {
                name: name,
                email: email,
                metamask: metamask,
                state: "user"
            });
        })
    }

    function logOut(){
        return firebareAuth.signOut();
    }

    // Observer pentru actiunile user-ului
    useEffect(()=> {
        const unsubscribe = firebareAuth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe;
    }, [])

    const authValue = {
        currentUser,
        signUp,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value = {authValue}>
            {children}
        </AuthContext.Provider>
    )
}
