import React from "react";
import styles from "./navbar.module.css";
import Icon from "../Icon/index";
const Navbar=({Val,call})=>{
    let handleclick=()=>{
        window.sessionStorage.removeItem('token');
    }
    return(
        <div  className={`${styles.container} ${Val? styles.active :''}`}>
            <div className={styles.container1}>
            <div className={styles.content1}>
            <div className={styles.parabox}>
             <p className={styles.para}>New customer?</p>
             </div>
             <div className={styles.buttonbox}>
             <button onClick={()=>call()}  className={styles.button}>Signup</button>
             </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.content2}>
                <div className={styles.iconbox}>
                <Icon name='user'size="lg" color='skyblue'/>
                </div>
                <div className={styles.parabox1}>
                <p className={styles.para1}>My Profil</p>
                </div>

            </div>
            <div className={styles.logoutbox}>
             <Icon name='sign-out'onclick={handleclick} size="lg" color='skyblue'/>
            </div>
            
        </div>
        </div>
    )
}
export default Navbar;