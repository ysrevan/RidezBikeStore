import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeProducts } from '../../redux/productSlice';
import "./HomeBestproducts.css";
import Button from '../utils/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { addBasket, increment, fetchBasket } from '../../redux/basketSlice';
import { FaHeart } from "react-icons/fa";
import { addWishlist, fetchWishlist } from '../../redux/wishlistSlice';

function HomeBestproducts() {
  const dispatch = useDispatch();

  const { homeproducts } = useSelector((state) => state.homeproducts);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { basket } = useSelector((state) => state.basket);

  useEffect(() => {
    dispatch(getHomeProducts());
    dispatch(fetchWishlist()); // Wishlist-i də ilkin yüklə
  }, [dispatch]);

  const handleAddWishlist = async (product) => {
    try {
      await dispatch(addWishlist(product)).unwrap();
      await dispatch(fetchWishlist()).unwrap();
    } catch (error) {
      console.error("Wishlist add error:", error);
    }
  };

  return (
    <section id='homebestproducts'>
      <div className="mycontainer">
        <div className="homeproducttext">
          <p className='check'>CHECK IT OUT</p>
          <h1 className='sellers'>Best Sellers</h1>
        </div>

        <div className="homeproductsbox">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {homeproducts && homeproducts.map((homeproduct) => {
              const existProduct = wishlist.find(item => item._id === homeproduct._id);
              const inBasket = basket.find(item => item.productId && item.productId._id === homeproduct._id);

              return (
                <SwiperSlide key={homeproduct._id}>
                  <div className="homeproductcard">
                    <FaHeart
                      onClick={() => handleAddWishlist(homeproduct)}
                      style={{ color: existProduct ? "red" : "black", cursor: "pointer" }}
                      className='wishlistheart'
                    />
                    <div className="homeproductcardimage">
                      <img src={`http://localhost:5000/${homeproduct.image}`} alt={homeproduct.title} />
                    </div>
                    <div className="homeproductcard-text">
                      <h2 className="homeproductcard-title">
                        {homeproduct.title.length > 20 ? homeproduct.title.slice(0, 20) + '...' : homeproduct.title}
                      </h2>
                      <p className='homeproductcard-category'>Category: {homeproduct.category}</p>
                      <p className='homeproductcard-price'>${homeproduct.price}</p>

                      <Button type="button"
                        className='add-btn'
                        onClick={async () => {
                          if (inBasket) {
                            await dispatch(increment(homeproduct)).unwrap();
                          } else {
                            await dispatch(addBasket(homeproduct)).unwrap();
                          }
                          await dispatch(fetchBasket()).unwrap();
                        }}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HomeBestproducts;
