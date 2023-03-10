import React from 'react';
import {useSelector} from "react-redux";
import {RootReducer} from "../store";

const Menu = () => {

    const {foods} = useSelector((s:RootReducer) => s.menu)
    console.log(foods)
    return (
           <div id="menu">

                   <div className='bg-blue-300 py-10'>

                       {
                           foods.map(el => (
                               <div className='flex flex-wrap basis-1/4'>
                                   <div className='border w-[300px] bg-amber-100 rounded'>
                                       <img src={el.photo} width={300} alt=""/>
                                       <h2 className='text-start text-xl text-black'>{el.name}</h2>
                                      <div className="flex px-4 py-4 items-center justify-between">
                                          <h3 className='text-start text-2xl text-black text-bold'>{el.price}$</h3>
                                          <button className="bg-red-600 py-3 py-2 rounded-lg text-white">TO ORDER</button>
                                      </div>
                                   </div>
                               </div>

                           ))
                       }
                   </div>
           </div>
    );
};

export default Menu;