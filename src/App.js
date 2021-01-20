import React from "react";
import styles from "./app.module.css";
import Routes from "./Router/index.js";
import { Provider } from "react-redux";
import store from "./store";
const App=()=>{
    return(
        <Provider store={store}>
       <Routes/>
       </Provider>
        
    )
}
export default App;