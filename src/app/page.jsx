"use client"
import React from 'react';
import { signInWithGoogle } from "./firebase/auth"

const Login = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    
    </div>
  );
};

export default Login;