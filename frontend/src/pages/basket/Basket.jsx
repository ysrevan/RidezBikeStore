import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Basket.css'
import { clearBasket, decrement, increment, removeBasket } from '../../redux/basketSlice'
import emptybasket from '../../assets/images/shopping_cart_clip_art_preview.webp'
import Button from '../../components/utils/Button'
import Basketpage from '../../components/pageheader/Basketpage'

function Basket() {
  const { basket } = useSelector((state) => state.basket)
  const dispatch = useDispatch()

  const totalprice = basket.reduce((sum, item) => sum + item.count * item.price, 0)

  return (
      <>
      <Basketpage/>
        <section id='basket'>
      <div className="mycontainer">
        <div className="basketcardbox">

          {basket.length === 0 ? (
            <div className="emptybasket">
              <img src={emptybasket} alt="Empty Basket" />
              <p>Cart is empty</p>
            </div>
          ) : (
            <>
              {basket.map((item) => (
                <div className="basketcard" key={item._id}>
                  <img src={`http://localhost:5000/${item.image}`} alt='' />
                  <div className="basketinfo">
                    <h3>{item.title}</h3>
                    <p>Category: {item.category}</p>
                    <p>Price: ${(item.count * item.price).toFixed(2)}</p>

                    <div className="basketactions">
                      <button disabled={item.count === 1} onClick={() => dispatch(decrement(item))}>-</button>
                      <span>{item.count}</span>
                      <button onClick={() => dispatch(increment(item))}>+</button>
                    </div>
                  </div>
                  <Button className='removebtn' onClick={() => dispatch(removeBasket(item))}>Remove</Button>
                </div>
              ))}

              <Button className='clearbasket' onClick={() => dispatch(clearBasket())}>Clear All</Button>
            </>
          )}

        </div>

        {basket.length > 0 && (
          <div className="totalpricebox">
            <h2>Total Price: ${totalprice.toFixed(2)}</h2>
          </div>
        )}
      </div>
    </section>
      </>
  )
}

export default Basket
