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
        <div className='w-[250px] h-[380px] flex flex-col items-center justify-between 
        hover:scale-110 transition duration-300 ease-in shadow-xl border 
        border-gray-300 rounded-xl gap-x-3 mt-10 ml-5 p-4'>
            <p className='text-gray-700 truncate w-40 mt-1 font-[900] text-lg'>
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
                        py-1 px-3 uppercase font-bold'>
                            Remove Item
                        </button>
                    ) : (
                        <button onClick={addHandler} className='text-gray-700
                        border-2 border-gray-700 rounded-full text-[12px]
                        py-1 px-3 uppercase font-bold'>
                            Add to cart
                        </button>
                    )
                }
            </div>
        </div>
    )
}
