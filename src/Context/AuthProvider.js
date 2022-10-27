import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    // User Data
    const [user, setuser] = useState(null)

    // Reload 
    const [loading, setLoading] = useState(true)

    // Providers
    const googleProvider = new GoogleAuthProvider();

    // Google Sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    //Email Sign up 
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Email Sign In
    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // On AUHT state Change
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setuser(currentUser)

        })

        return () => unsubscribe()

    },)

    // Log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        user, signUp, signIn, googleSignIn, logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;