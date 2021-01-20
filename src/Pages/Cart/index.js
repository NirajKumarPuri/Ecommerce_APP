import React from "react";
import { deleteitem } from "../../Action";
import { connect } from "react-redux";
import styles from "./cart.module.css";
class Cart extends React.Component{
    constructor(props){
        super(props);
    }
 
    render(){
        return(
            <div className={styles.container}>
              {this.props.url.map((item,index)=>{
                  console.log(item)
                  return <div className={styles.cartbox} key={index} >
                      <div className={styles.imgbox}>
                          <img className={styles.img} src={item.imgurl}/>
                      </div>
                      <div className={styles.parabox}>
                      <p className={styles.para}>{item.tittle}</p>
                      </div>
                      <div className={styles.buttonbox}>
                          <button onClick={()=>this.props.getitem(index)} className={styles.button}>Delete</button>
                      </div>
                      </div>
              })}  
         
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
return{
    url:store.imgurl
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getitem:(item)=>dispatch(deleteitem(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Cart);