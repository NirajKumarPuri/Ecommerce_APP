import React from "react";
import Icon from "../../../Component/Icon";
import styles from "./footer.module.css";
import Icon1 from "../../../Component/Icon1/index";
const Footer=()=>{
    return(
        <div className={styles.container1}>
           <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.heading}>ABOUT</h1>
                <a className={styles.para} href="#">Contact us</a>
                <a className={styles.para} href="#">About us</a>
                <a className={styles.para} href="#">Careers</a>
                <a className={styles.para} href="#">Press</a>
                <a className={styles.para} href="#">Shopping Wholesale </a>
             </div>
             <div className={styles.content}>
                <h1 className={styles.heading}>HELP</h1>
                <a className={styles.para} href="#">Payments</a>
                <a className={styles.para} href="#">Shipping</a>
                <a className={styles.para} href="#">Cancellations and Returns</a>
                <a className={styles.para} href="#">FAQ</a>
                <a className={styles.para} href="#">Report  Infringement  </a>
             </div>
             <div className={styles.content}>
                <h1 className={styles.heading}>POLICY</h1>
                <a className={styles.para} href="#">Return Policy</a>
                <a className={styles.para} href="#">Terms of use</a>
                <a className={styles.para} href="#">Privacy</a>
                <a className={styles.para} href="#">Sitemap</a>
                <a className={styles.para} href="#">EPR Compliance  </a>
             </div>
             <div className={styles.content}>
                <h1 className={styles.heading}>SOCIAL</h1>
                <a className={styles.para} href="#">facebook</a>
                <a className={styles.para} href="#">Twitter</a>
                <a className={styles.para} href="#">YouTube</a>
             </div>
             
             </div>
             <div className={styles.content1}>
                <div className={styles.box1}>
                <div className={styles.iconbox}>
                <Icon  name='suitcase'size="lg" color='yellow'/>
                </div>
                <div className={styles.parabox}>
                 <p className={styles.para1}>Shell on Kart</p>
                </div>
                </div>
                <div className={styles.box1}>
                <div className={styles.iconbox}>
                <Icon name='gift'size="lg" color='yellow'/>
                </div>
                <div className={styles.parabox}>
                 <p className={styles.para1}>Gift Cards</p>
                </div>
                </div>
                <div className={styles.box1}>
                <div className={styles.iconbox}>
                   <div className={styles.iconbox1}>
                <Icon name='question'size="lg" color='black'/>
                </div>
                </div>
                <div className={styles.parabox}>
                 <p className={styles.para1}>Help Center</p>
                </div>
                </div>
             <div className={styles.boxtext}>
                <p className={styles.text}>© 2007-2021 shoppingcart.com</p>
             </div>
             <div className={styles.imgbox}>
             <img className={styles.img} src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_7934bc.svg"/>
             </div>
             </div>
        </div>
    )
}
export default Footer;