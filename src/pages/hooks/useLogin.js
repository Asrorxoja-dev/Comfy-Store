import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../firebase/fireBaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import toast from "react-hot-toast"

import {login} from "../../features/user/userSlice"
import { useDispatch } from "react-redux"


export function useLogin() {
    const dispatch = useDispatch()
    const Login = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then( async (userCredential)=>{
          await updateProfile(auth.currentUser, {
            photoURL:data.photoURL,
            displayName:data.displayName,
          })
          toast.success(`Welcome ${data.displayName}`)
          dispatch(login(userCredential.user))
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
         
        })
    }
    return {Login}
}
