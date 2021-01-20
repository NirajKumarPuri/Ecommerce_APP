import {createStore,applyMiddleware  } from "redux";
import Itemreducer from "./Reducer";
import LoggerMiddleware from "redux-logger";
const store=createStore(Itemreducer,applyMiddleware(LoggerMiddleware))
export default store;