import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchBasket,
  clearBasket,
  decrement,
  increment,
  removeBasket
} from '../../redux/basketSlice'
import emptybasket from '../../assets/images/shopping_cart_clip_art_preview.webp'
import Button from '../../components/utils/Button'
import Basketpage from '../../components/pageheader/Basketpage'
import './Basket.css'

function Basket() {
  const { basket, loading } = useSelector((state) => state.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBasket())
  }, [dispatch])

  const totalprice = basket.reduce((sum, item) => {
    if (!item.productId) return sum
    return sum + item.count * item.productId.price
  }, 0)

  return (
    <>
      <Basketpage />
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
                {basket.map((item) =>
                  item.productId && (
                    <div className="basketcard" key={item.productId._id}>
                      <img src={`http://localhost:5000/${item.productId.image}`} alt='' />
                      <div className="basketinfo">
                        <h3>{item.productId.title}</h3>
                        <p>Category: {item.productId.category}</p>
                        <p>Price: ${(item.count * item.productId.price).toFixed(2)}</p>
                        <div className="basketactions">
                          <button disabled={item.count === 1} onClick={async () => {
                            await dispatch(decrement(item.productId)).unwrap()
                            dispatch(fetchBasket())
                          }}>-</button>
                          <span>{item.count}</span>
                          <button onClick={async () => {
                            await dispatch(increment(item.productId)).unwrap()
                            dispatch(fetchBasket())
                          }}>+</button>
                        </div>
                      </div>
                      <Button className='removebtn' onClick={async () => {
                        await dispatch(removeBasket(item.productId)).unwrap()
                        dispatch(fetchBasket())
                      }}>Remove</Button>
                    </div>
                  )
                )}
                <Button className='clearbasket' onClick={async () => {
                  await dispatch(clearBasket()).unwrap()
                  dispatch(fetchBasket())
                }}>Clear All</Button>
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
