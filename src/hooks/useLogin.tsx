import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
export default function useLogin() {
  const [error, setError] = useState<null | string>(null);

  const login = (email: string, password: string) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user logged in:", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, login };
}
