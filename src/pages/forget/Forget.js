import React from 'react'
import classes from "./Forget.module.css"

const Forget = () => {
    return (
        <div className={classes.container}>
            <form className={classes.innerContainer}>
               <h1>Forget Password</h1>
               <div className={classes.inputContainer}>
                   <span>Your Email Address*</span>
                   <input type="text"
                   placeholder='Type Your Email Address'
                   />
               </div>
               <button>Continue</button>
            </form>
        </div>
    )
}

export default Forget