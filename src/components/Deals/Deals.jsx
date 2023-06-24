import React from 'react'
import './Deals.css'

function Deals() {
    return (
        <div className='Deals'>
            <div className='deals-right mix-match-deal'>
                <h2 className='mix-match'>MIX & MATCH DEAL</h2>
                <h1>CHOOSE ANY <br /> 2 OR MORE</h1>
                <div className='vr-lines'>
                    <hr />
                    <h3>INCLUDING</h3>
                    <hr />
                </div>
                <div className='new-tots'>
                    <h2>NEW</h2>
                    <h2>LOADED TOTS</h2>
                </div>
                <div className='price'>
                    <h3>$</h3>
                    <h1>6</h1>
                    <div className='price-wrapper'>
                        <h3>99</h3>
                        <h4>each</h4>
                    </div>
                </div>
                <div className='order-btn'>
                    <button>ORDER NOW</button>
                </div>
            </div>
            <div className='deals-left'>
                <div className='combo-deal'>
                    <h3 className='combo-deal-title'>PERFECT COMBO DEAL</h3>
                    <div className='combo-deal-wrapper'>
                        <div className='combo-deal-price'>
                            <h3>$</h3>
                            <h1>19</h1>
                            <h3>99</h3>
                        </div>
                        <button>ORDER NOW</button>
                    </div>
                </div>
                <div className='carryout-deal'>
                    <div className='carryout-deal-wrapper'>
                        <div className='carry-deal-left'>
                            <h3 className='carryout-deal-title'>CARRYOUT DEAL</h3>
                            <h1>ALL PIZZAS <br /> 1 TOPPING</h1>
                            <h3><span>OR</span> DIPS & TWIST COMBOS</h3>
                            <h3><span>OR</span> 8-PIECE WINGS</h3>
                        </div>
                        <div className='carry-deal-right'>
                            <h3>$</h3>
                            <h1>7</h1>
                            <h3>99</h3>
                        </div>
                    </div>
                    <button>ORDER NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Deals