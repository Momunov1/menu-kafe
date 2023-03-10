import React from 'react';
import ToDo from "./Components/ToDoList/Admin";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Order from "./Components/Order/order";
import "./app.css"
import Menu from "./Menu/Menu";


function App() {
 return (
   <div>
       <Routes>
           <Route path={"/"} element={<Menu/>}/>
           <Route path={"/order"} element={<Order/>}/>
           <Route path={"/admin"} element={<ToDo/>}/>
       </Routes>
   </div>
 )
}
export default App;
