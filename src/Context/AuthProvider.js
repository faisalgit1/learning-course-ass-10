import React, { createContext } from 'react';
import app from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    // Providers
    const googleProvider = new GoogleAuthProvider();

    // Google Sign in
    const googleSignIn = () => {

        return signInWithPopup(auth, googleProvider)

    }

    // Sign up Method
    const signUp = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        googleSignIn, signUp
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