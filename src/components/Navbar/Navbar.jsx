import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
export default function Navbar() {
  const user = false;
  return (
    <div className='navbar'>
      <div className='nav_1'>
        <i className="navIcon fa-brands fa-instagram-square"></i>
        <i className="navIcon fa-brands fa-facebook-square"></i>
        <i className="navIcon fa-brands fa-twitter-square"></i>
      </div>
      <div className='nav_2'>
        <ul className='topList'>
          <li className='topListItem'><i className="fa-solid fa-house-user"></i> 
            <Link to='/' className='link'>HOME</Link>
          </li>
          <li className='topListItem'><i className="fa-solid fa-marker"></i>
            <Link className='link' to='/write'>WRITE</Link>
          </li>
          <li className='topListItem'><i className="fa-solid fa-headset"></i> 
          <Link className='link' to='/'>CONTACT</Link>
          </li>
          <li className='topListItem'><i className="fa-solid fa-people-group"></i>
            <Link className='link' to='/'>ABOUT</Link>
          </li>
          <li>
          {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className='nav_3'>
        {user ? 
          ( <img className='navImage' src='https://cdn3.vectorstock.com/i/1000x1000/32/57/young-man-avatar-character-vector-24273257.jpg' 
          alt=''
        /> ) :
          ( <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>LOGIN</Link> 
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>REGISTER</Link>
            </li>
            </ul>
          )
        }
        <i class="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

// https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2021/08/27182033/Pxfuel-writing.jpg