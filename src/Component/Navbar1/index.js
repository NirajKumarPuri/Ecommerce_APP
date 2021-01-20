import React from "react";
import styles from "./navbar1.module.css";
import Icon from "../Icon/index";
const Navbar1=({Val1})=>{
    return(
        <div className={`${styles.container} ${Val1? styles.active :''}`}>
        <div className={styles.container1}>
        <div className={styles.content1}>
                <div className={styles.iconbox}>
                <Icon name='bell'size="lg" color='skyblue'/>
                </div>
                <div className={styles.parabox1}>
                <p className={styles.para1}>Notification preferences</p>
                </div>

            </div>
        </div>    

        </div>
    )
}
export default Navbar1;