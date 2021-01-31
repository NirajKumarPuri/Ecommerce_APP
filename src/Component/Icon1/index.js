import React from "react";
import styles from "./icon1.module.css";
const Icon1=({name,size,color,onclick})=>{
    return(
        <div className={styles.container}>
        <i  onClick={()=>onclick()} className={`fas fa-${name} fa-${size}`} style={{color:color}}/>
        </div>
    )
}
export default Icon1;