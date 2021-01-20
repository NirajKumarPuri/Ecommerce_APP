import React from "react";
import styles from "./icon.module.css";
const Icon=({name,size,color,onclick})=>{
    return(
        <div className={styles.container}>
        <i className={styles.icon} onClick={()=>onclick()} className={`fa fa-${name} fa-${size}`} style={{color:color}}/>
        </div>
    )
}
export default Icon;