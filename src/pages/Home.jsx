import React from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import { useSelector } from 'react-redux';

export default function Home() {
    console.log("Home.jsx called")

    const posts = useSelector((state) => state.posts);

    return (
        <div className='min-h-[100vh] w-10/12 max-w-6xl flex flex-wrap justify-center 
        items-center gap-y-10 gap-x-5'>
            {
                posts.loading ? <Spinner /> : (
                    posts.items.map((post) => <Product key={post.id} post={post} />)
                )
            }
        </div>
    )
}
