import React,{useState,useEffect} from "react";
import Card from "../Card/index";
import styles from "./fatch.module.css";

const Fatch=()=>{
    const[data,setdata]=useState([])
    useEffect(()=>{
       fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setdata(json) )
},[])
    return(
        <div className={styles.container}>
            {console.log(data)}
            {data.map((item)=>{
                return <div className={styles.content}>
                   <Card imgurl={item.image} tittle={item.title} price={item.price} itemid={item.id} discrip={item.description}/>
                </div>
            })}
        
        </div>
    )
}
export default Fatch;