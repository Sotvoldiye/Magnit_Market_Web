import React, { lazy } from "react";
import style from "../Login/Login.module.css";
import Input from "../../components/FormInput/Input";
import Password from "../../components/FormInput/Password";
import { NavLink } from "react-router-dom";
function Login() {
  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };
  return (
    <div className={style.Login_Container}>
      <img height={'40px'} src="./images/logo.png" alt="" />
      <div className={style.title}>
        <h1>Sign Up</h1>
        <p>
        Enter your credentials to continue        </p>
      </div>
      <form onSubmit={handleSubmit}>
<div>
<Input
          name={"name"}
          type={"text"}
          label={"Username"}
        />
        <Input
          name={"email"}
          type={"email"}
          label={"Email"}
        />
        <Password
          name={"password"}
          type={"password"}
          label={"Password"}
        />
</div>
        <button type="submit">Sign in</button>
        <p style={{textAlign:'center', marginTop:'25px'}}>Already have an account? <NavLink style={{color:'rgb(228, 83, 83)', textDecoration:'none'}} to="/login">Singup</NavLink></p>
      </form>
    </div>
  );
}

export default Login;
