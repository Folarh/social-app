import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function useSignup() {
 const [error, setError]= useState<null |string>(null);

 const signup = (email:string,password:string)=>{
    setError(null)
    createUserWithEmailAndPassword(auth,email,password)
    .then((res)=>{
        console.log("user signed up:", res.user)
    })
    .catch((err)=>{
        setError(err.message)
    })

 }
 return {error,signup}
}
