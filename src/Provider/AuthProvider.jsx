import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)


const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser =( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const gProvider =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const LogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUser =(name, url)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name , photoURL: url
          })
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('current user' ,currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])

    const userInfo ={
        user,
        loading,
        LogOut,
        createUser,
        loginUser,
        gProvider,
        updateUser

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;