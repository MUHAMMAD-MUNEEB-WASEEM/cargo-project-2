import React from "react";
import classes from "./TopClient.module.css"
import starIcon from "./../images/starIcon.png"
import image4 from "./../images/image4.png"

const TopClient =()=>{
    return(
        <div className={classes.cont}>
         <div className={classes.heading}>FIND TOP RATED CLIENTS</div>
         <div className={classes.wrap}>
           <div className={classes.card}>
            <div className={classes.name}>
            <img alt="" src={image4}/>
            <div>John Mckenzie</div>
            </div>
            <div className={classes.content}>
               <div className={classes.left}>
                <div className={classes.earning}>Total Hires</div>
                <div className={classes.amount}>78</div>
                <div className={classes.stars}>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                </div>
               </div>
               <div className={classes.right}>
                Book Now
               </div>
            </div>
           </div>
           <div className={classes.card}>
           <div className={classes.name}>
            <img alt="" src={image4}/>
            <div>John Mckenzie</div>
            </div>
            <div className={classes.content}>
               <div className={classes.left}>
                <div className={classes.earning}>Total Hires</div>
                <div className={classes.amount}>78</div>
                <div className={classes.stars}>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                </div>
               </div>
               <div className={classes.right}>
                Book Now
               </div>
            </div>
           </div>
           <div className={classes.card}>
           <div className={classes.name}>
            <img alt="" src={image4}/>
            <div>John Mckenzie</div>
            </div>
            <div className={classes.content}>
               <div className={classes.left}>
                <div className={classes.earning}>Total Hires</div>
                <div className={classes.amount}>78</div>
                <div className={classes.stars}>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                </div>
               </div>
               <div className={classes.right}>
                Book Now
               </div>
            </div>
           </div>
         </div>
         <div className={classes.wrap}>
           <div className={classes.card}>
           <div className={classes.name}>
            <img alt="" src={image4}/>
            <div>John Mckenzie</div>
            </div>
            <div className={classes.content}>
               <div className={classes.left}>
                <div className={classes.earning}>Total Hires</div>
                <div className={classes.amount}>78</div>
                <div className={classes.stars}>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                </div>
               </div>
               <div className={classes.right}>
                Book Now
               </div>
            </div>
           </div>
           <div className={classes.card}>
           <div className={classes.name}>
            <img alt="" src={image4}/>
            <div>John Mckenzie</div>
            </div>
            <div className={classes.content}>
               <div className={classes.left}>
                <div className={classes.earning}>Total Hires</div>
                <div className={classes.amount}>78</div>
                <div className={classes.stars}>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                </div>
               </div>
               <div className={classes.right}>
                Book Now
               </div>
            </div>
           </div>
           <div className={classes.card}>
           <div className={classes.name}>
            <img alt="" src={image4}/>
            <div>John Mckenzie</div>
            </div>
            <div className={classes.content}>
               <div className={classes.left}>
                <div className={classes.earning}>Total Hires</div>
                <div className={classes.amount}>78</div>
                <div className={classes.stars}>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                <img alt="" src={starIcon}/>
                </div>
               </div>
               <div className={classes.right}>
                Book Now
               </div>
            </div>
           </div>
         </div>
        </div>
    )
}

export default TopClient