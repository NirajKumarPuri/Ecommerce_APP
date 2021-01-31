import React,{useState} from "react";
import styles from "./dashboard.module.css";
import Heading from "./Heading/index";
import Fatch from "./Fatchdata/index";
import Login from "../Login/index";
import Signup from "../Signup/index";
import Landing from "./Landing/index";
import Footer from "./Footer/index";
const Dashboard=()=>{
    const[data,setdata]=useState(false);
    const[item,setitem]=useState(false);
    const[val,setval]=useState(false)
    const[data1,setdata1]=useState(false)
    let   moushover1=()=>{
        setdata1(!data1)
   }
   let normailstate1=()=>{
       setdata1(!data1)
   }
  let   moushover=()=>{
         setitem(!item)
    }
    let normailstate=()=>{
        setitem(!item)
    }


   let heandleclick=()=>{
        setdata(!data)
        setitem(item)
        
    }
    let signupclick=()=>{
        setval(!val)
    }
    
        return(
            <div className={styles.container}>
            <Heading mousover={moushover1} mouseout={normailstate1} Item1={data1} Item={item} fun={signupclick} onclick={heandleclick} click={moushover} normal={normailstate}/>
            <Landing/>
            <Login Data={data} onclick={heandleclick}  />
            <Signup Data={val} onclick={signupclick} button={heandleclick}/>
            <Fatch/>
            <Footer/>
            </div>
        )
    
}
export default Dashboard;