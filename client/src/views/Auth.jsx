import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithRedirect,
    getRedirectResult
} from "firebase/auth";


const Auth = () => {
    useEffect(() => {
        const auth = getAuth();
        getRedirectResult(auth)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log('INFO: ', token, user)
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(errorCode,errorMessage)
          });
    }, [])

    const googleAuth = e => {
        e.preventDefault()
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    return (
        <div>
            <h1>Auth Page</h1>
            <button onClick={googleAuth}>Google Sign-In</button>
        </div>
    )
}

export default Auth 