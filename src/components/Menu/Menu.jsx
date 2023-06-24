import React from 'react'
import { PiBookLight } from 'react-icons/pi';
import './Menu.css'

function Menu() {
    return (
        <div className='Menu'>
            <h1>Browser Our Menu</h1>
            <div className='banner-menu'>
                <div className='banner-left'>
                    <PiBookLight color='white' size={60} />
                    <button>VIEW FULL MENU</button>
                </div>
            </div>
            <div className='menu-list'>
                <ul>
                    <li>LOCATIONS</li>
                    <li>EMAIL & TEXT OFFERS</li>
                    <li>GIFT CARDS</li>
                    <li>TRACKER</li>
                    <li>NUTRITION</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu