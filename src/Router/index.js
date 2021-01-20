import React from "react";
import {BrowserRouter as Router,Switch,Route  } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/index";
import Login from "../Pages/Login/index";
import Signup from "../Pages/Signup/index";
import Item from "../Pages/Item/index";
import Cart from "../Pages/Cart/index";
import Buy from "../Pages/Buy/index";
function Routes(){
    return(
        <Router>
            <Switch>
            
                 <Route path="/cart" exact component={Cart}/>
                 <Route path="/buy" exact component={Buy}/>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" exact component={Login}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/:id" exact component={Item}/>
               
                
                
            </Switch>
        </Router>
    )
}
export default Routes;