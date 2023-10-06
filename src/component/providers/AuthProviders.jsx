import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  createUserWithEmailAndPassword,           onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext=createContext(null);
const AuthProviders = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);

const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);



    }
    const createUser=(email,password)=>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn=(email,password)=>
    {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);

    }
    const logOut=()=>{
        setLoading(true);
       return  signOut(auth);
    }
   useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
        console.log('observing user current:',currentUser);

    });
    return ()=>{
        unSubscribe();

    } 
   },[])

    const authInfo={user, 
        signInWithGoogle,
        loading,
        createUser,signIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

 
export default AuthProviders;
AuthProviders.propTypes={
    children:PropTypes.node.isRequired
}


/**
 * create context and export it
 * create provider
 * set context provider value
 * use the auth provider in main.jsx
 * acccess children in auth provider component and use it in the middle of the provider
 * 
 */