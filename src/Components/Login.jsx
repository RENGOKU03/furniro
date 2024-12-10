import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase.js";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [user, setUser] = useState(null);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLogoutConfirm(false);
    });
  }, []);

  async function loginGoogle() {
    try {
      await signInWithPopup(auth, provider);
      setLogoutConfirm(false);
    } catch (e) {
      console.log("Login failed");
      setLogoutConfirm(false);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {user === null ? (
        <button
          className="flex justify-center gap-2 items-center group"
          onClick={() => loginGoogle()}
        >
          Login With
          <FaGoogle className="group-hover:scale-125" />
        </button>
      ) : (
        <div className="flex justify-center items-center gap-2">
          <img
            src={user?.photoURL}
            alt="user-avatar"
            className="rounded-full h-10"
          />
          <p>{user?.displayName}</p>
          <button onClick={() => setLogoutConfirm(true)}>Logout</button>
          {logoutConfirm && (
            <div className="flex flex-col gap-2 z-10 absolute top-16 px-3 py-2 bg-amber-300 rounded-xl text-black">
              <p>Are You Sure To Logout.</p>
              <button
                onClick={() => logout()}
                className="font-bold text-white p-2 bg-red-500"
              >
                Logout
              </button>
              <button
                onClick={() => setLogoutConfirm(false)}
                className="bg-white p-2 font-bold"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Login;
