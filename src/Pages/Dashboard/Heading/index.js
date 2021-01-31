import React from "react";
import styles from "./heading.module.css";
import Icon from "../../../Component/Icon/index";
import Navbar from "../../../Component/Navbar/index";
import Navbar1 from "../../../Component/Navbar1/index";
import {Link } from "react-router-dom";
import { connect } from "react-redux";
import { getdata } from "../../../Action";
class Heading extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    handlechange=(e)=>{
        this.setState({data:e.target.value})

    }
    render(){
    return(
        <div className={styles.container}>
            <div className={styles.container1}>
            <div className={styles.content}>
            <input className={styles.input} onChange={this.handlechange} value={this.state.value} type="text" placeholder="Search for products, brands and more" />
            <div className={styles.searchbox}>
            <Icon name='search'size="lg" color='skyblue' onclick={()=>this.props.Getdata(this.state.data)}/>
            </div>
            </div>
            <div className={styles.Login}>
               <button onMouseOver={()=>this.props.click()} onMouseOut={()=>this.props.normal()} onClick={()=>this.props.onclick()} className={styles.Logintext}>Login</button>
            </div>
            <div className={styles.morebox}>
           <button onMouseOver={()=>this.props.mousover()} onMouseOut={()=>this.props.mouseout()} className={styles.morebutton}>More</button>
           <div className={styles.iconbox}>
           <Icon name= {this.props.Item1?'angle-down':'angle-up'}size="lg" color='white'/>
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
            <div onMouseOver={()=>this.props.click()}  onMouseOut={()=>this.props.normal()} className={styles.container2}>
             <Navbar Val={this.props.Item? this.props.Item:''} call={this.props.fun}/>
             <Navbar1 Val1={this.props.Item1? this.props.Item1:''}/>
            </div>
            
           
            
        </div>
    )
}
}
 const mapDispatchToProps=(dispatch)=>{
    return{
       Getdata:(item)=>dispatch(getdata(item))
    }
}
export default connect(null,mapDispatchToProps) (Heading);
// onclick,click,normal,Item,fun,mousover,mouseout,Item1