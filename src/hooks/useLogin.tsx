import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

//firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export default function useLogin() {
  const [error, setError] = useState<null | string>(null);
  const { dispatch } = useAuthContext();
  const login = (email: string, password: string) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, login };
}
