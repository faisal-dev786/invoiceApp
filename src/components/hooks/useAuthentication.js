import { auth } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useFireStore } from "./useFirestore";

export const useAuthentication = () => {
  const setUser = useStoreActions((action) => action.setUser);
  const { useSetDoc } = useFireStore();
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserInfo = (e) => {
    e.preventDefault();

    setUserInfo((prev) => {
      // if (e.target.name == "displayName" && e.target.value.length < 1) {
      //   console.log(e.target.value);
      //   return setIsDisabled(true);
      // }

      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleConfirmPass = () => {
    // perform all neccassary validations
    if (userInfo.password !== userInfo.confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const useUserSignUp = async () => {
    try {
      const userSignUp = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );

      setUser({
        displayName: userInfo.displayName,
        email: userInfo.email,
        id: userSignUp.user.uid,
      });
      console.log("user signed up", userSignUp);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const useUserSignIn = async () => {
    try {
      const userSignIn = await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      setUser({
        displayName: userInfo.displayName,
        email: userInfo.email,
        id: userSignIn.user.uid,
      });
      console.log("user signed in", userSignIn);
      navigate("/CreateInvoice");
    } catch (error) {
      console.log(error);
    }
  };

  const useUserSignOut = async () => {
    try {
      const userSignOut = await signOut(auth);
      console.log(userSignOut);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    useUserSignUp,
    useUserSignIn,
    useUserSignOut,
    handleUserInfo,
    userInfo,
    setUser,
    handleConfirmPass,
    isDisabled,
  };
};
