// import React from 'react'
// import { LuUserRound } from "react-icons/lu";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { GrBasket } from "react-icons/gr";
// import "./Wrapper.css"
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// function Wrapper() {

//   let {basket} = useSelector((state)=>state.basket)
  
// let basketcount = basket.reduce((sum,item)=>sum+item.count,0)

//   return (
//     <div className='wrapper-box'>
//         <Link to="/register"><LuUserRound  className='user'/></Link>
//        <Link to='/wishlist'> <IoIosHeartEmpty   className='heart'/></Link>
//        <div className="basket-wrapper">
//        <Link to='/basket'><GrBasket   className='basket'/></Link>
//        <span className='basket-count'>{basketcount}</span>
//        </div>
//     </div>
//   )
// }

// export default Wrapper



import React, { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { GrBasket } from "react-icons/gr";
import "./Wrapper.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import axios from 'axios';

function Wrapper() {
  const baseUrl = "http://localhost:5000/auth"
  const { basket } = useSelector((state) => state.basket);
  const basketcount = basket.reduce((sum, item) => sum + item.count, 0);
  const [showDropdown, setShowDropdown] = useState(false);
  const {user} = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const handleLogout = async() =>{
    const res = await axios.get(`${baseUrl}/logout`)

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
        <button className="user-btn">Account</button>
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

      <Link to='/wishlist'><IoIosHeartEmpty className='heart' /></Link>

      <div className="basket-wrapper">
        <Link to='/basket'><GrBasket className='basket' /></Link>
        <span className='basket-count'>{basketcount}</span>
      </div>
    </div>
  )
}

export default Wrapper;
