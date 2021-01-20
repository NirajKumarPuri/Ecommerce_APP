import React from "react";
import styles from "./login.module.css";
class Login extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
        return(
            <div className={`${styles.container} ${this.props.Data? styles.active:''}`}>
              <div className={styles.container1}>
           <div className={styles.content1}>
             <div className={styles.headingbox}>
              <h1>Login</h1>
             </div>
             <div className={styles.parabox}>
             <p className={styles.para}>Get access to your Orders, Wishlist and Recommendations</p>
             </div>
             <div className={styles.backimg}>
              <img className={styles.img} src="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"/>
             </div>
           </div>
           <div className={styles.content2}>
             <div className={styles.emailbox}>
              <input className={styles.email} type='text' placeholder="Enter Email/Mobile number"autoFocus/>
             </div>
             <div className={styles.passwordbox}>
              <input className={styles.password} type="number" placeholder="Enter password"/>
             </div>
             <div className={styles.buttonbox}>
             <button className={styles.button}>Login</button>
             </div>
           </div>
           <div className={styles.crosbox}>
           <button onClick={()=>this.props. onclick()} className={styles.cros}>x</button>
           </div>
           </div>
            </div>
        )
        }
}
export default Login;