import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { APP_LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGPTToggle = () => {
    dispatch(toggleGPTSearchView());
  };

  return (
    <div className="flex px-4 shadow items-center shadow-black w-screen justify-between z-10 absolute">
      <img className="w-40 z-10 " src={APP_LOGO} alt="logo" />
      {user && (
        <div>
          <button
            className="rounded-lg text-white bg-purple-600 py-2 px-4 mr-2 font-bold"
            onClick={handleGPTToggle}
          >
            GPT SERACH
          </button>
          <button
            className="text-white font-bold text-lg"
            onClick={handleSignOut}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
