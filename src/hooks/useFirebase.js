import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,updateProfile,sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../firebase/fiebase.initialize";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

       return  signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user);
            // })
            // .finally(() => setIsLoading(false));
    }
    const createUserUsingEmail=(email,password)=>{
            setIsLoading(true);
            
 
return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUsingEmailAndPassword=(email, password) =>{
        const auth = getAuth();
return signInWithEmailAndPassword(auth, email, password)
  
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
        .then(result => {
          console.log(result);
        })
    }
    const setUserName = () => {
      updateProfile(auth.currentUser)
        .then(result => { })
    }
    const handleResetPassword = () => {
      sendPasswordResetEmail(auth, user.email)
        .then(result => { })
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInUsingEmailAndPassword,
        createUserUsingEmail,
        verifyEmail,
        handleResetPassword }
  
}

export default useFirebase;