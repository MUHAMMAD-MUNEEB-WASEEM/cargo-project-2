import React from "react";
import Navbar from "../../navbar/Navbar";
import classes from "./SignupChoice.module.css"
import gIcon from "./../../images/gIcon.png"
import { useNavigate } from "react-router-dom";


const SignupChoice =({val})=>{
    const navigate = useNavigate();
    const handleSignup=()=>{
        navigate("/signup")
    }
    return(
        <div>
          <Navbar/>
          <div className={classes.cont}>
            <div className={classes.loginWrap}>
              <div className={classes.heading}>Signup as a Client</div>
              <div className={classes.inputWrap}>
              <div>Your Email Address*</div>
              <input placeholder="Type Your Email Address"/>
              </div>
              <div className={classes.inputWrap}>
              <div>Password*</div>
              <input placeholder="Type Your Password"/>
              </div>
              <div className={classes.loginBtn}>
                 Login Now
              </div>
              <div className={classes.loginGoogleBtn}>
                <img src={gIcon} alt=""/>
                 <div>Login with Google</div>
              </div>
             
              <div className={classes.rememberWrap}>
                <div className={classes.checkboxWrap}>
                    <input type="checkbox"/>
                    <div>Remember me</div>
                </div>
                <div className={classes.forgot}>Forgot Password?</div>
              </div>
              <div className={classes.question}>Don’t have Account? <span onClick={()=>handleSignup()}>Sign Up</span></div>
             
            </div>
          </div>
        </div>
    )
}

export default SignupChoice