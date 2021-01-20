import React from "react";
import styles from "./card.module.css";
import {useHistory  } from "react-router-dom";
const Card=({imgurl,tittle,price,itemid,discrip})=>{
    const history= useHistory();
    const handleclick=()=>{
       console.log('handleclick')
       history.push(`../${itemid}`,{id:itemid,Image:imgurl,Title:tittle,Rupes:price,Discrip:discrip})
    }
    return(
        <div className={styles.container} onClick={handleclick}>
            <div className={styles.imgbox}>
                <img className={styles.img} src={imgurl}/>

            </div>
                 <div className={styles.parabox}>
                     <p className={styles.para}>{tittle}</p>
                 </div>
                 <div className={styles.pricebox}>
                  <p className={styles.price}>Rs {price}</p>
                 </div>
        </div>
    )
}
export default Card;