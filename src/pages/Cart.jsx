import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function Cart() {
    console.log("Cart.jsx called")
    
    const cart = useSelector((state) => state.cart);
    const totalAmount = useSelector((state) => state.totalAmount);
    
    return (
        <div>
            {
                cart.length === 0 ? (
                    <div>
                        <p>
                            Your cart is empty!
                        </p>
                        <NavLink to={"/"}>
                            <button className='uppercase'>
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <div>
                            {
                                cart.map((cartItem) =>
                                    <CartItem key={cartItem.id} cartItem={cartItem} />)
                            }
                        </div>
                        <div>
                            <div>
                                <p className='uppercase'>
                                    Your cart
                                </p>
                                <p className='uppercase'>
                                    Summary
                                </p>
                                <p>
                                    Total Items : {cart.length}
                                </p>
                            </div>
                            <div>
                                <p>
                                    Total Amount : <span>${totalAmount}</span>
                                </p>
                                <button>
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
