import {createStore,applyMiddleware  } from "redux";
import Itemreducer from "./Reducer";
import LoggerMiddleware from "redux-logger";
import ThunkMiddleware from "redux-thunk";
const store=createStore(Itemreducer,applyMiddleware(LoggerMiddleware,ThunkMiddleware))
export default store;