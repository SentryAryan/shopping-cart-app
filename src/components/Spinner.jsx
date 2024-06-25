import React from 'react'
import "./Spinner.css";

export default function Spinner() {
    console.log("Spinner.jsx called")
    
    return (
        <div className="lds-ellipsis">
            <div className='text-green-600'></div>
            <div className='text-green-600'></div>
            <div className='text-green-600'></div>
            <div className='text-green-600'></div>
        </div>
    )
}
