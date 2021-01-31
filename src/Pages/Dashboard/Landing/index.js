import React from "react";
import styles from "./landing.module.css";
import Img from "../../../Assect/product.jpeg";
import Img1 from "../../../Assect/Online-shop-660.jpg";
import Img2 from "../../../Assect/shoping1.jpg";
import Img3 from "../../../Assect/4-June-FL-social.jpg";
import Icon from "../../../Component/Icon/index";
class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentindex:0,
        }
    }
    componentDidMount(){
        setInterval(()=>{
            if(this.state.currentindex < 3){
                this.setState({currentindex:this.state.currentindex+1})
            }
            else if(this.state.currentindex>=3){
                this.setState({
                    currentindex:0
                })
            }
        },4000)
    }
    handleclick=()=>{
        if(this.state.currentindex < 3){
            this.setState({currentindex:this.state.currentindex+1})
        }
        else if(this.state.currentindex>=3){
            this.setState({
                currentindex:0
            })
        }
    }
    render(){
     let   arr=[
            {
                imgurl:Img
            },{
                imgurl:Img1
            },{
                imgurl:Img2
            },{
                imgurl:Img3
            }
        ]
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                <div className={styles.iconbox}>
                <Icon name="angle-left" size='4x' color='gray'onclick={this. handleclick}/>
                </div>
                <div className={styles.iconbox}>
                <Icon name="angle-right" size='4x' color='gray' onclick={this. handleclick}/>
                </div>
                </div>
            <img className={styles.img} src={arr[this.state.currentindex].imgurl}/>
            </div>
        )
    }
}
export default Landing;