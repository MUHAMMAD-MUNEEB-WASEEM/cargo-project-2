import React, { useRef } from 'react'
import classes from "./Profile.module.css"

const Profile = ({title,para}) => {

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <h2>Upload Profile Picture</h2>

                <div className={classes.profileContainer}>
                    <div className={classes.profileLeft}>
                        {/* <h2>Profile left</h2> */}
                        <div className={classes.imgDiv}>
                            <div className={classes.imgCircle}>
                                <img src="" alt="" />
                            </div>
                        </div>

                        <button>Submit</button>
                        <br />
                        <button className={classes.btn2}>Change Photo</button>

                    </div>
                    <div className={classes.profileRight}>
                        {/* <h2>profile right</h2> */}
                        <button>
                            <input type="file" id="file-upload" />
                            <label for="file-upload">Upload</label>
                        </button>
                        <h2>Add Bio</h2>
                        <p>
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                            in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                            dolorem eum fugiat quo voluptas nulla pariatu
                        </p>
                    </div>
                </div>


                <h2 style={{marginTop:"40px"}}>{title}</h2>
                <div className={classes.verificationContainer}>
                    <div className={classes.verifiedLeft}>
                        {/* <h2>Verification left</h2> */}
                        <button>
                            <input type="file" id="file-upload" />
                            <label for="file-upload">Upload</label>
                        </button>
                        <p>{para}</p>
                    </div>
                    <div className={classes.verifiedRight}>
                        {/* <h2>Verification right</h2> */}
                        <p>    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                            in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                            dolorem eum fugiat quo voluptas nulla pariatu</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile