import React from 'react';
import Logo from "../../img/2023-03-10_15-18-43.png";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
        <div className="container">
        <div className="header flex items-center justify-between">
        <img src={Logo} alt=""/>

    <div className="flex mx-2 ">
    <Link to={'/'}><p className="mx-3 text-2xl cursor-pointer hover:text-red-700">Menu</p></Link>
    <Link to={'/order'}><p className="mx-3 text-2xl cursor-pointer hover:text-red-700">Orders</p></Link>
    <Link to={'/admin'}> <p className="mx-3 text-2xl cursor-pointer hover:text-red-700">Admin</p></Link>
    </div>
    </div>
    </div>
    </div>
);
};

export default Header;