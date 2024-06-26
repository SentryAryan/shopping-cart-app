import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';

export default function Product({ post }) {
    console.log("Product.jsx called")

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function addHandler() {
        dispatch(add(post));
        toast.success("Item added to cart!");
    }

    function removeHandler() {
        dispatch(remove(post));
        toast.error("Item removed from cart!");
    }

    return (
        <div className='flex flex-col items-center justify-between hover:scale-110 transition 
        duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
        border border-gray-300 rounded-xl gap-5 p-4 
        hover:shadow-[inset_-12px_-8px_40px_#46464620] group'>
            <p className='text-gray-700 truncate w-40 
            mt-1 font-[900] text-lg'>
                {post.title}
            </p>
            <p className='w-40 text-gray-400 font-normal text-[10px]'>
                {`${post.description.split(" ").slice(0,10).join(" ")}...`}
            </p>
            <img src={post.image} alt={post.title} className='w-[180x] h-[180px]' />
            <div className='w-full flex justify-between items-center'>
                <p className='text-green-600 font-[900]'>
                    ${post.price}
                </p>
                {
                    cart.some((item) => item.id === post.id) ? (
                        <button onClick={removeHandler} className='text-gray-700
                        border-2 border-gray-700 rounded-full text-[12px]
                        py-1 px-3 uppercase font-bold group-hover:bg-gray-700
                        group-hover:text-white transition-all duration-300 ease-in'>
                            Remove Item
                        </button>
                    ) : (
                        <button onClick={addHandler} className='text-gray-700
                        border-2 border-gray-700 rounded-full text-[12px]
                        py-1 px-3 uppercase font-bold group-hover:bg-gray-700
                        group-hover:text-white transition-all duration-300 ease-in'>
                            Add to cart
                        </button>
                    )
                }
            </div>
        </div>
    )
}
