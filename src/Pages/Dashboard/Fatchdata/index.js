import React,{useState,useEffect} from "react";
import Card from "../Card/index";
import { connect } from "react-redux";
import styles from "./fatch.module.css";

const Fatch=(props)=>{
    const[data,setdata]=useState([])
    useEffect(()=>{
       fetch('https://fakestoreapi.com/products/').then(res=>res.json())
    .then(json=>setdata(json) ).catch((data)=>console.log('Niraj',data))
},[])

// useEffect(()=>{
//     setdata((prevData)=>props.Data ? props.Data : prevData)
// },[props.Data])
    return(
        <div className={styles.container}>
            {console.log('niraj',data)}
            {data.map((item)=>{
                return <div className={styles.content}>
                   <Card imgurl={item.image} tittle={item.title} price={item.price} itemid={item.id} discrip={item.description}/>
                </div>
            })}
        
        </div>
    )
}
const mapStateToProps=(store)=>{
    return{
        Data:store.Data
    }
}
export default connect(mapStateToProps,null)(Fatch);