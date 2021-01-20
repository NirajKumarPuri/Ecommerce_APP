import React from "react";
import styles from "./heading.module.css";
import Icon from "../../../Component/Icon/index";
import Navbar from "../../../Component/Navbar/index";
import Navbar1 from "../../../Component/Navbar1/index";
import {Link } from "react-router-dom";
const Heading=({onclick,click,normal,Item,fun,mousover,mouseout,Item1})=>{
    return(
        <div className={styles.container}>
            <div className={styles.container1}>
            <div className={styles.content}>
            <input className={styles.input} type="text" placeholder="Search for products, brands and more" />
            <div className={styles.searchbox}>
            <Icon name='search'size="lg" color='skyblue'/>
            </div>
            </div>
            <div className={styles.Login}>
               <button onMouseOver={()=>click()} onMouseOut={()=>normal()} onClick={()=>onclick()} className={styles.Logintext}>Login</button>
            </div>
            <div className={styles.morebox}>
           <button onMouseOver={()=>mousover()} onMouseOut={()=>mouseout()} className={styles.morebutton}>More</button>
           <div className={styles.iconbox}>
           <Icon name='angle-up'size="lg" color='white'/>
           </div>
            </div>
            <div className={styles.cardbox}>
             <div className={styles.cardicon}>
             <Icon name='shopping-cart'size="lg" color='white'/>
              </div>
              <div className={styles.cartbox}>
             <Link className={styles.cardbutton} to="/cart" >Cart</Link>
             </div>
            </div>
            </div>
            <div onMouseOver={()=>click()}  onMouseOut={()=>normal()} className={styles.container2}>
             <Navbar Val={Item? Item:''} call={fun}/>
             <Navbar1 Val1={Item1? Item1:''}/>
            </div>
            
           
            
        </div>
    )
}
export default Heading;