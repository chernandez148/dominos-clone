import React from 'react'
import './OrderBanner.css'

function OrderBanner() {
    return (
        <div className='OrderBanner'>
            <hr />
            <h1>START YOUR ORDER</h1>
            <button>DELIVERY</button>
            <h2>or</h2>
            <button>CARRYOUT</button>
            <hr />
        </div>
    )
}

export default OrderBanner