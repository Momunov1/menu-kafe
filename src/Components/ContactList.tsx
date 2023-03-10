import React from 'react';
import {IContact} from "./interfaces/ ProductInterfaces";


interface IComponentProps {
    el:IContact,
}

const ContactList = ({el}:IComponentProps) => {
    return (
        <div className="Card_food items-center">
            <img src={el.image}  alt="" />
            <h1 className="text-3xl items-center mx-2 my-2">{el.name}</h1>

            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mx-3 my-2">{el.price}</h1>
                <button   type="button"
                         className="text-white bg-amber-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">To Order
                </button>
            </div>
        </div>
    );
};

export default ContactList;