import React from "react";
import SignIn from "../../components/sign-In/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import "./signIn-and-signUp.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sing-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInAndSignUpPage;
