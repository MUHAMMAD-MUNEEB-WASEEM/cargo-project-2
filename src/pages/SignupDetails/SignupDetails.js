import React from 'react'
import classes from "./SignupDetails.module.css"

const SignupDetails = () => {
    return (
        <div className={classes.container}>
            <form className={classes.innerContainer}>
                <div className={classes.left}>
                    <h1>Add truck details</h1>
                    <div className={classes.leftDetails}>
                        <div>
                            <span>Type</span>
                            <select>
                                <option value="select1" key="">Select1</option>
                                <option value="select2" key="">Select2</option>
                            </select>
                        </div>

                        <div>
                            <span>Upload Truck Picture</span>
                            <input type="file" />
                        </div>
                        <div>
                            <span>Brand</span>
                            <select>
                                <option value="select1" key="">Select1</option>
                                <option value="select2" key="">Select2</option>
                            </select>
                        </div>
                        <div className={classes.modelYearInput}>
                            <div>
                                <span>Model</span>
                                <input type="text" />
                            </div>
                            <div>
                                <span>Year</span>
                                <input type="text" />
                            </div>
                        </div>

                        <div>
                            <span>Registration Plate</span>
                            <input type="text" />
                        </div>

                        <div>
                            <span>Insurance Company</span>
                            <select>
                                <option value="select1" key="">Select1</option>
                                <option value="select2" key="">Select2</option>
                            </select>
                        </div>

                        <div>
                            <span>Technical Inspection</span>
                            <input type="file" />
                        </div>

                    </div>
                </div>


                <div className={classes.right}>
                    <h1>Add driver details</h1>
                    <div className={classes.rowInput}>
                      <div>
                         <span>First name</span>
                         <input type="text" />
                      </div>
                      <div>
                         <span>Last name</span>
                         <input type="text" />
                      </div>
                    </div>

                    <div className={classes.rowInput}>
                      <div>
                         <span>Password</span>
                         <input type="text" />
                      </div>
                      <div>
                         <span>Phone</span>
                         <input type="text" placeholder='+1' />
                      </div>
                    </div>

                    <div>
                     <span>Driving liscenece number</span>
                     <input type="text" />
                    </div>

                    <div className={classes.lisencePicture}>
                      <span>Upload driving liscenece picture</span>
                      <input type="file" />
                    </div>

                    <div>
                        <span>Location of operation</span>
                        <input type="text" />
                    </div>

                    <div className={classes.radiusInput}>
                        <span>Radius of service</span>
                        <div>
                            <input type="text" placeholder='From' />
                            <input type="text" placeholder='To' />
                        </div>
                    </div>
                    
                </div>

                <div className={classes.btnContainer}>
                   <button>Back</button>
                   <button>Next</button>
                </div>
            </form>
        </div>
    )
}

export default SignupDetails