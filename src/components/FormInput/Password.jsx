import  { useState } from "react";
import style from "./passwor.module.css";
import { NavLink } from "react-router-dom";
function Password() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = () => {
    !prew == prev;
  };
  return (
    <div>
        <label htmlFor="password">Password</label>
   <div className={style.inputContainer}>
   <div  className={style.input}>
      <input
        type={showPassword ? "text" : "password"}
        id="password"
      />
      <button type="button" onClick={togglePassword}>
        {showPassword ? (
         <i className="fa-solid fa-eye" style={{color: "#7c7c7c"}}></i>
        ) : (
          <i className="fa-solid fa-eye-slash" style={{color: "#7c7c7c"}}></i>
        )}
      </button>
    </div>
    <div style={{marginLeft:'auto'}} className={style.navlink}>
    <NavLink style={{textDecoration:'none', color:'black', fontSize:'14px'}}>Forgot Password?</NavLink>

    </div>
   </div>
    </div>
  );
}

export default Password;
