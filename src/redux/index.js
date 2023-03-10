import {createStore} from "@reduxjs/toolkit";
import {Reducer} from "./Reducers";


export const store = createStore(Reducer)