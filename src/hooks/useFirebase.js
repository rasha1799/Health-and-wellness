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

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    const createUserUsingEmail=(email,password)=>{
            setIsLoading(true);
            
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


    }
    const signInUsingEmailAndPassword=(email, password) =>{
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
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
        createUserWithEmailAndPassword,
        verifyEmail,
        handleResetPassword }
  
}

export default useFirebase;