import { auth, provider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";
import { useStoreActions } from "easy-peasy";

const GoogleSignIn = () => {
  // useStoreActions == useDispatch ( dispatch a function )

  const setUser = useStoreActions((actions) => actions.setUser);

  const handleLoggin = async () => {
    const loggin = await signInWithPopup(auth, provider);
    console.log(loggin);
    setUser(loggin.user);
  };
  return { handleLoggin };
};

export default GoogleSignIn;
