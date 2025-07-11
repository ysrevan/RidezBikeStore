import React, { useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { GrBasket } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Wrapper.css';

function Wrapper() {
  const baseUrl = "http://localhost:5000/auth";
  const { basket } = useSelector((state) => state.basket);
  const basketcount = basket.reduce((sum, item) => sum + item.count, 0);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    const res = await axios.post(`${baseUrl}/logout`);
    dispatch(setUser(null));
    if (res.status === 200) {
      toast.success("Logout successful!");
    } else {
      toast.error("Logout failed");
    }
    setShowDropdown(false);
    setMenuOpen(false);
  };

  return (
    <div className="wrapper-box">
     
      <div className="icon-wrapper">
        <div className="user-dropdown" onClick={() => setShowDropdown(!showDropdown)}>
          <button className="user-btn">
            {user ? (user.username || user.name || "User") : "Account"}
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              {user ? (
                <Link to="/" onClick={handleLogout}>Logout</Link>
              ) : (
                <>
                  <Link to="/login" onClick={() => setShowDropdown(false)}>Login</Link>
                  <Link to="/register" onClick={() => setShowDropdown(false)}>Register</Link>
                </>
              )}
            </div>
          )}
        </div>

        {user && (
          <Link to="/profile" className="user-profile-icon">
            <FaRegUser className="user" />
          </Link>
        )}
        <Link to="/wishlist"><IoIosHeartEmpty className="heart" /></Link>
        <div className="basket-wrapper">
          <Link to="/basket"><GrBasket className="basket" /></Link>
          <span className="basket-count">{basketcount}</span>
        </div>
      </div>

     
      <RxHamburgerMenu className="burger" onClick={() => setMenuOpen(!menuOpen)} />

     
      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-list">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
          </ul>
          <div className="mobile-icons">
            {user && (
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                <FaRegUser className="user" /> Profile
              </Link>
            )}
            <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
              <IoIosHeartEmpty className="heart" /> Wishlist
            </Link>
            <Link to="/basket" onClick={() => setMenuOpen(false)}>
              <GrBasket className="basket" /> Basket ({basketcount})
            </Link>
            {user ? (
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Wrapper;
