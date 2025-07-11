import React, { useEffect, useState } from 'react'
import { getProducts, searchProduct, sortProductHigest, sortProductLowest } from '../../redux/shopproductSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Shopproducts.css'
import Button from '../utils/Button'
import { addBasket, fetchBasket } from '../../redux/basketSlice'
import { addWishlist, removeWishlist } from '../../redux/wishlistSlice'
import { FaHeart } from "react-icons/fa6"
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Shopproducts() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { products } = useSelector((state) => state.products)

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const totalPages = Math.ceil(products.length / productsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const { wishlist } = useSelector((state) => state.wishlist)


  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <section id='shopproducts'>
      <div className='mycontainer'>
        
     <div data-aos="fade-down">
     <div className="searchsortbox">
     <input type="text" className='search' onChange={(e)=>dispatch(searchProduct(e.target.value))}/>
     <div className="sortbox">
     <Button className="sortbtn"  onClick={()=>dispatch(sortProductHigest("high"))}>HighToLow</Button>
     <Button className="sortbtn"  onClick={()=>dispatch(sortProductLowest("low"))}>LowToHigh</Button>
     </div>
     </div>

     <div className="shopproductsbox">
     
     {
 currentProducts.map((product) => {
   const existProduct = wishlist.find(item => item._id === product._id)

   return (
     <div className='product-card' key={product._id}  onClick={() => navigate(`/productdetail/${product._id}`)}>
       <FaHeart
 onClick={async (e) => {
   e.stopPropagation()
   if (existProduct) {
     await dispatch(removeWishlist(product)).unwrap()
   } else {
     await dispatch(addWishlist(product)).unwrap()
   }
 }}
 style={{ color: existProduct ? "red" : "black" }}
 className='shopwishlistheart'
/>

       <div className="productcard-image">
         <img src={`http://localhost:5000/${product.image}`} alt="" />
       </div>
       <div className="productcard-text">
         <h2 className="productcard-title">{product.title.slice(0, 18)}...</h2>
         <p className='productcard-category'>Category: {product.category}</p>
         <p className='productcard-price'>${product.price}</p>
         <Button  type="button"
 className='add-btn'
 onClick={async (e) => {
   e.stopPropagation()
   await dispatch(addBasket(product)).unwrap()
   await dispatch(fetchBasket()).unwrap()  
 }}
>
 Add To Cart
</Button>
       </div>
     </div>
   )
 })
}      </div>


     <div className="pagination">
       {
         Array.from({ length: totalPages }, (_, i) => (
           <button
             key={i}
             onClick={() => paginate(i + 1)}
             className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
           >
             {i + 1}
           </button>
         ))
       }
     </div>
     </div>
    
    </div>
    </section>
  )
}

export default Shopproducts
