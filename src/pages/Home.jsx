import React from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import { useSelector } from 'react-redux';

export default function Home() {
    console.log("Home.jsx called")

    const posts = useSelector((state) => state.posts);

    return (
        <div className={`${posts.loading ? "flex  justify-center items-center" :
            "grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-7"}  
            px-10 py-10 min-h-[100vh] max-w-6xl `}>
            {
                posts.loading ? <Spinner /> : (
                    posts.items.map((post) => <Product key={post.id} post={post} />)
                )
            }
        </div>
    )
}
