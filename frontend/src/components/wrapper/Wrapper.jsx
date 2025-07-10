import React, { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { GrBasket } from "react-icons/gr";
import "./Wrapper.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import axios from 'axios';
import {toast} from 'react-toastify'
import { FaRegUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

function Wrapper() {
  const baseUrl = "http://localhost:5000/auth"
  const { basket } = useSelector((state) => state.basket);
  const basketcount = basket.reduce((sum, item) => sum + item.count, 0);
  const [showDropdown, setShowDropdown] = useState(false);
  const {user} = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const handleLogout = async() =>{
    const res = await axios.post(`${baseUrl}/logout`)

    dispatch(setUser(null))

    if (res.status === 200) {
      toast.success("Logout successfull!"); 
    }else{
      toast.error("Logout failed")
    }
  }


  return (
    <div className='wrapper-box'>
      <div
        className="user-dropdown"
        onClick={() => setShowDropdown(!showDropdown)}
      >
      <button className="user-btn">{user ? (user.username || user.name || "User") : "Account"}</button>

        {showDropdown && (
          <div className="dropdown-menu">
            {
              user ? (<Link to="/" onClick={handleLogout} >Logout</Link>):(<>
               <Link to="/login" onClick={() => setShowDropdown(false)}>Login</Link>
               <Link to="/register" onClick={() => setShowDropdown(false)}>Register</Link>
              </>)
            }
           
            
          </div>
        )}
      </div>

    
      
      {user && (
        <Link to="/profile" className="user-profile-icon">
          <FaRegUser className='user'/>
        </Link>
      )}
      <Link to='/wishlist'><IoIosHeartEmpty className='heart' /></Link>

      <div className="basket-wrapper">
        <Link to='/basket'><GrBasket className='basket' /></Link>
        <span className='basket-count'>{basketcount}</span>
      </div>

      
<RxHamburgerMenu  className='burger'/>



    </div>
  )
}

export default Wrapper;


