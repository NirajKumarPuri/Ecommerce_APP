import React from "react";
import styles from "./item.module.css";
import { getitem  } from "../../Action";
import { connect } from "react-redux";
import {useLocation ,Link } from "react-router-dom";
const Item=(props)=>{
    const Location=useLocation();
    console.log(Location);
    let handleclick=()=>{
        console.log('title',Location.state.Title)
        props.getImageUrl(Location.state.Image,Location.state.Title)
    }

    return(
        <div className={styles.container}>
            <div className={styles.imgbox}>
                <img className={styles.img} src={Location.state.Image}/>
            </div>
            <div className={styles.content}>
             <div className={styles.parabox1}>
              <p className={styles.para1}>{Location.state.Title}</p>
             </div>
             <div className={styles.parabox2}>
                 <p className={styles.para2}>Special price</p>
             </div>
             <div className={styles.parabox3}>
                 <p className={styles.para3}>Rs.{Location.state.Rupes}</p>
             </div>
             <div className={styles.parabox4}>
               <p className={styles.para4}>{Location.state.Discrip}</p>
             </div>
             <div className={styles.buttonbox}>
                 <div className={styles.addbox}>
                 <button onClick={handleclick} className={styles.add}>ADD TO CARD</button>
                 </div>
                 <div className={styles.buybox}>
                 <Link className={styles.buy} to="/buy">BUY NOW</Link>
                 </div>

             </div>
            </div>
        </div>
    )
}
const mapStateToProps=(store)=>{
    return{
        url:store.imgurl
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getImageUrl:(item,item1)=> dispatch(getitem(item,item1))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Item);