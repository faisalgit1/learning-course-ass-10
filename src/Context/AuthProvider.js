import React, { createContext } from 'react';
import app from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    // Providers
    const googleProvider = new GoogleAuthProvider();

    // Google Sign in
    const googleSignIn = () => {

        return signInWithPopup(auth, googleProvider)

    }

    //Email Sign up 
    const signUp = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Email Sign In
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        googleSignIn, signUp, signIn
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