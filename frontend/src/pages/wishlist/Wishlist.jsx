import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Wishlist.css'
import { addWishlist, clearWishlist } from '../../redux/wishlistSlice'
import { FaHeart } from "react-icons/fa6";
import Button from '../../components/utils/Button';
import Wishlistpage from '../../components/pageheader/Wishlistpage';
function Wishlist() {

  let { wishlist } = useSelector((state) => state.wishlist)
  let dispatch = useDispatch()

 
  

  return (
    <>
<Wishlistpage/>
<section id='wishlist'>
       <div className="mycontainer">
        <div className="wishlistcardbox">

          {wishlist.length === 0 ? (
            <div className="emptywishlistbox">
               <FaHeart
          className='emptywishlist'
        />
              <p>Wishlist is empty</p>
            </div>
          ) : (
            <>
              {wishlist.map((item) => (
                <div className="wishlistcard" key={item._id}>
                  <img src={`http://localhost:5000/${item.image}`} alt='' />
                  <div className="wishlistinfo">
                    <h3>{item.title}</h3>
                    <p>Category: {item.category}</p>
                    <p>Price: ${(item.price).toFixed(2)}</p>
                  </div>
                  <Button className='removebtn' onClick={() => dispatch(addWishlist(item))}>Remove</Button>
                </div>
              ))}

              <Button className='clearwishlist' onClick={() => dispatch(clearWishlist())}>Clear All</Button>
            </>
          )}

        </div>
        </div>
    </section>

    </>
  )
}

export default Wishlist