import React from 'react'
import { FcGoogle } from "react-icons/fc";

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router';

export default function OAuth() {

  const navigate = useNavigate();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // check for the user

      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate("/");
    } catch (error) {
      console.log(error)
      toast.error("Could not authorize with Google")
    }
  }
  return (
    <button
      onClick={onGoogleClick}
      type="button"
      className="flex items-center justify-center w-full bg-red-700 text-white text-sm font-medium uppercase rounded shadow-md px-7 py-3 hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900">
      <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
          Continue with Google
    </button>
  );
}
