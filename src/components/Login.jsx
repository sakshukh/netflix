import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import { validatePassword, validateEmail } from "../utils/validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { BG_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [emailErrorMsg, setEmailErrorMsg] = useState(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleSignInUpChange = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = () => {
    setEmailErrorMsg(validateEmail(email.current.value));
    setPasswordErrorMsg(validatePassword(password.current.value));

    if (emailErrorMsg || passwordErrorMsg) return;

    if (isSignInForm) {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " -- ", errorMessage);
        });
    } else {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " -- ", errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="bg-opacity-70 absolute object-cover h-screen"
          src={BG_IMAGE}
          alt="background"
        />
      </div>
      <form
        className="bg-black absolute md:w-[30%] w-full text-white mx-auto p-12 left-0 right-0 my-36 bg-opacity-80 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white font-bold text-3xl my-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-4 w-full rounded-md bg-gray-700 text-sm placeholder:italic border border-slate-900 focus:outline-none"
            ref={name}
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="my-4 p-4 w-full rounded-md bg-gray-700 text-sm placeholder:italic border border-slate-900 focus:outline-none"
        />
        {emailErrorMsg && (
          <p className="text-sm text-red-600">{emailErrorMsg}</p>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full rounded-md bg-gray-700 text-sm placeholder:italic focus:outline-none shadow-sm"
        />
        {passwordErrorMsg && (
          <p className="text-sm text-red-600">{passwordErrorMsg}</p>
        )}
        <button
          className="my-4 p-4 w-full bg-red-700 rounded-md"
          onClick={handleFormSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

        <p className="text-sm my-4" onClick={handleSignInUpChange}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In here"}
        </p>

        <p className="text-sm my-4 mt-8">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
