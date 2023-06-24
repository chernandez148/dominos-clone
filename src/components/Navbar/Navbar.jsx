import React from 'react'
import logo from '../../assets/dominos-logo.png'
import { PiShoppingCart } from 'react-icons/pi';
import './Navbar.css'

function Navbar() {
    return (
        <div className='Navbar'>
            <ul className='nav-left'>
                <li><img src={logo} alt="logo" width="47px" /></li>
                <li><a href="#">ORDER ONLINE</a></li>
                <li><a href="#">LOCATIONS</a></li>
                <li><a href="#">MENU</a></li>
                <li><a href="#">COUPONS</a></li>
                <li><a href="#">TRACKER</a></li>
                <li><a href="#">REWARDS</a></li>
            </ul>
            <ul className='nav-right'>
                <li><button className='banner'><span>Earn points towards <br /> FREE PIZZA!</span></button></li>
                <li><button className='sign-in'>SIGN IN & EARN <br /> REWARDS</button></li>
                <li><PiShoppingCart className='cart' /><span className='items'>0</span></li>
            </ul>
        </div>
    )
}

export default Navbar