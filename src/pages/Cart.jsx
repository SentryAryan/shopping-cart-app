import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import toast from 'react-hot-toast';
import { reset } from '../redux/slices/cartSlice';

export default function Cart() {
    console.log("Cart.jsx called")

    const cart = useSelector((state) => state.cart);
    const totalAmount = useSelector((state) => state.totalAmount);
    const dispatch = useDispatch();

    function resetHandler() {
        toast.success("Items bought succesfully!. Thanks for buying from us.");
        dispatch(reset());
    }

    return (
        <div className='flex justify-center items-center max-w-6xl min-h-[80vh]
        p-10 rounded-lg'>
            {
                cart.length === 0 ? (
                    <div className='w-[100%] flex flex-col gap-y-8 items-start justify-bewteen'>
                        <p className='text-2xl font-bold text-gray-700'>
                            Your cart is empty!
                        </p>
                        <NavLink to={"/"} className="w-full">
                            <button className='w-full uppercase border-2 border-white text-lg 
                            font-bold bg-green-600 text-white px-4 py-3 rounded-xl 
                            hover:bg-white hover:text-green-600 hover:border-green-600 
                            transition duration-300 ease-in'>
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                ) : (
                    <div className='flex flex-wrap w-full gap-x-20 justify-between'>
                        <div className='w-[100%] cart-screen:w-[60%] flex flex-col gap-y-5'>
                            {
                                cart.map((cartItem) =>
                                    <CartItem key={cartItem.id} cartItem={cartItem} />)
                            }
                        </div>
                        <div className='w-[100%] cart-screen:w-[30%] flex flex-col justify-between 
                        mt-20'>
                            <div className='flex flex-col gap-y-2'>
                                <p className='uppercase text-[#166534] font-bold
                                text-2xl'>
                                    Your cart
                                </p>
                                <p className='uppercase text-[#166534] font-bold
                                text-5xl'>
                                    Summary
                                </p>
                                <p className='text-xl font-bold text-gray-700'>
                                    Total Items : {cart.length}
                                </p>
                            </div>
                            <div className='flex flex-col gap-y-8 items-start 
                            justify-bewteen'>
                                <p className='text-2xl font-bold text-gray-700'>
                                    Total Amount : <span className='font-extrabold text-gray-800'>
                                        ${totalAmount}</span>
                                </p>
                                <NavLink to={"/"} className="w-full">
                                    <button className='w-full uppercase border-2 border-white 
                                    text-lg font-bold bg-green-600 text-white px-4 py-3 
                                    rounded-xl hover:bg-white hover:text-green-600 
                                    hover:border-green-600 transition duration-300 ease-in'
                                        onClick={resetHandler}>
                                        Checkout Now
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
