import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaTumblr } from 'react-icons/fa';
import cola from '../../assets/cola.png'
import dairy from '../../assets/dpz-dairy.png'
import './Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-wrapper'>
                <div>
                    <h4>Our Company</h4>
                    <ul>
                        <li>Corporate</li>
                        <li>Jobs</li>
                        <li>About Domino's</li>
                    </ul>
                </div>
                <div>
                    <h4>Our Pizza</h4>
                    <ul>
                        <li>Nutrition</li>
                        <li>Allergen Info</li>
                        <li>Gluten Free Warning</li>
                        <li>Ingredients</li>
                    </ul>
                </div>
                <div>
                    <h4>Additional Services</h4>
                    <ul>
                        <li>Smart Slice School Lunch</li>
                        <li>Large Business Orders</li>
                        <li>Wedding Registry</li>
                        <li>Fundraising</li>
                        <li>Gift Cards</li>
                        <li>Recycling</li>
                    </ul>
                </div>
                <div>
                    <h4>Customer Service</h4>
                    <ul>
                        <li>Customer Support</li>
                        <li>Do Not Sell/Share My Info</li>
                        <li>Email & Text Offers</li>
                        <li>Carryout Insurance</li>
                        <li>Privacy</li>
                        <li>Legal</li>
                        <li>español</li>
                    </ul>
                </div>
            </div>
            <div className='follow'>
                <div className='follow-icons'>
                    <ul>
                        <li><FaFacebookF size={24} /></li>
                        <li><FaTwitter size={24} /></li>
                        <li><FaInstagram size={24} /></li>
                        <li><FaTumblr size={24} /></li>
                    </ul>
                </div>
                <img src={cola} alt="" />
                <img src={dairy} alt="" />
            </div>
        </div>
    )
}

export default Footer