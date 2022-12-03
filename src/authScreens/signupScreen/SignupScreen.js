import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import classes from "./SignupScreen.module.css"
import busIcon from "./../../images/busIcon.png"
import userIcon from "./../../images/userIcon.png"
import { useNavigate } from "react-router-dom";


const SignupScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }
    const handleChoice = () => {
        navigate("/choice")
    }
    return (
        <div>
            <Navbar />
            <div className={classes.cont}>
                <div className={classes.signupWrap}>
                    <div className={classes.heading}>Register as a client or driver</div>
                    <div className={classes.option}>
                        <div className={classes.imgWrap}>
                            <img src={busIcon} alt="" />
                        </div>
                        <div className={classes.imgText} onClick={() => handleChoice()}>I’m a client, hiring for services</div>
                    </div>
                    <div className={classes.option}>
                        <div className={classes.imgWrap}>
                            <img src={userIcon} alt="" />
                        </div>
                        <div className={classes.imgText} onClick={() => handleChoice()}>I’m a driver looking for work</div>
                    </div>
                    <div className={classes.loginBtn}>
                        Create Account
                    </div>
                    <div className={classes.question}>Already have an Account? <span onClick={() => handleLogin()}>Login</span></div>
                </div>

            </div>
        </div>
    )
}

export default SignupScreen