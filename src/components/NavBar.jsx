import React from 'react'
import logoPath from "../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavBar() {
    console.log("NavBar.jsx called")

    const cart = useSelector((state) => state.cart);

    return (
        <div className="bg-slate-900 flex justify-center items-center w-[100%]">
            <div className='w-[71.5%] max-w-6xl h-20 flex justify-between items-center'>
                <NavLink to={"/"}>
                    <img src={logoPath} alt="Logo" className='h-14' />
                </NavLink>
                <div className='flex text-slate-100 font-medium gap-x-6 mr-5'>
                    <NavLink to={"/"}>
                        <p className='hover:text-green-400 
                        duration-300'>
                            Home
                        </p>
                    </NavLink>
                    <NavLink to={"/cart"}>
                        <div className='relative'>
                            <FaShoppingCart className='text-2xl 
                            hover:text-green-400 duration-300' />
                            {
                                cart.length > 0 ? (
                                    <span className='absolute -top-1 -right-2 
                                    text-xs bg-green-600 flex justify-center 
                                    items-center rounded-full w-5 h-5 animate-bounce'>
                                        {cart.length}
                                    </span>
                                ) : ("")
                            }
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
