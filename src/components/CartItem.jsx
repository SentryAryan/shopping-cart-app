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
    <div>
      <img src={cartItem.image} alt={cartItem.title} />
      <div>
        <p>{cartItem.title}</p>
        <p>{cartItem.description}</p>
        <div className='flex justify-between'>
          <p>{cartItem.price}</p>
          <button onClick={removeHandlder}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  )
}
