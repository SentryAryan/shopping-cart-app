import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';

export default function CartItem({ cartItem }) {
  console.log("CartItem.jsx called");

  const dispatch = useDispatch();

  const removeHandlder = () => {
    dispatch(remove(cartItem));
    toast.error("Item removed from cart!");
  }

  return (
    <div className='flex flex-wrap gap-y-5 sm:gap-x-8 sm:p-4 border-b-2 border-b-gray-800
    py-5'>
      <img src={cartItem.image} alt={cartItem.title} className='w-[162px]' />
      <div className='w-full cart-screen:w-[62%] flex flex-col gap-y-10 justify-between'>
        <div className='flex flex-col gap-y-4'>
          <p className='text-2xl font-bold text-gray-700'>
            {cartItem.title}
          </p>
          <p className='font-lg text-lg text-gray-700'>
            {cartItem.description.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
        </div>
        <div className='flex justify-between mb-5'>
          <p className='text-green-600 font-[900] text-xl'>
            ${cartItem.price}
          </p>
          <button onClick={removeHandlder} className='bg-[#FECACA] flex justify-center
          items-center rounded-full w-9 h-9 group hover:bg-red-400 transition duration-300
          ease-in'>
            <MdDelete className='text-lg text-[#991b1b] group-hover:text-white transition 
            duration-300 ease-in' />
          </button>
        </div>
      </div>
    </div>
  )
}
