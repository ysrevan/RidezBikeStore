import React, { useEffect, useState } from 'react'
import { getProducts, searchProduct } from '../../redux/shopproductSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Shopproducts.css'
import Button from '../utils/Button'
import { addBasket } from '../../redux/basketSlice'
import { FaHeart } from "react-icons/fa6";
import { addWishlist } from '../../redux/wishlistSlice'
import { useNavigate } from 'react-router-dom'
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

  return (
    <section id='shopproducts'>
      <div className='mycontainer'>
     <div className="searchsortbox">
     <input type="text" className='search' onChange={(e)=>dispatch(searchProduct(e.target.value))}/>
     </div>
      <div className="shopproductsbox">
     
      {
  currentProducts.map((product) => {
    const existProduct = wishlist.find(item => item._id === product._id)

    return (
      <div className='product-card' key={product._id}  onClick={() => navigate(`/productdetail/${product._id}`)}>
        <FaHeart
          onClick={(e) => {e.stopPropagation(),dispatch(addWishlist(product))}}
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
          <Button className='add-btn' onClick={(e) => {e.stopPropagation(),dispatch(addBasket(product))}}>Add To Cart</Button>
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
    </section>
  )
}

export default Shopproducts
