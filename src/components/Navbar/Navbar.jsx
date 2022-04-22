import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav_1'>
        <i className="navIcon fa-brands fa-instagram-square"></i>
        <i className="navIcon fa-brands fa-facebook-square"></i>
        <i className="navIcon fa-brands fa-twitter-square"></i>
      </div>
      <div className='nav_2'>
        <ul>
          <li><i className="fa-solid fa-house-user"></i> HOME</li>
          <li><i className="fa-solid fa-marker"></i> WRITE</li>
          <li><i className="fa-solid fa-headset"></i> CONTACT</li>
          <li><i className="fa-solid fa-people-group"></i> ABOUT</li>
          <li><i className="fa-solid fa-arrow-right-from-bracket"></i> LOGOUT</li>
        </ul>
      </div>
      <div className='nav_3'>
        <img className='navImage' src='https://cdn3.vectorstock.com/i/1000x1000/32/57/young-man-avatar-character-vector-24273257.jpg' 
          alt=''
        />
        <i class="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

// https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2021/08/27182033/Pxfuel-writing.jpg