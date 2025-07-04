import React, { useState, useEffect } from 'react';
import './Hero.css';
import slide1 from '../../assets/images/h1-slider2.png';
import slide2 from '../../assets/images/h1-slider3.jpg';
import slide3 from '../../assets/images/h1-slider4.jpg';

const slides = [
  { id: 1, bgImage: slide1, bgColor: '#FF6600' },
  { id: 2, bgImage: slide2, bgColor: 'transparent' },
  { id: 3, bgImage: slide3, bgColor: 'transparent' },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide-content ${currentIndex === index ? 'active' : ''}`}
          style={{
            backgroundColor: slide.bgColor,
            backgroundImage: slide.id === 1 ? 'none' : `url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {index === 0 && (
            <div className="slide1-layout">
              <div className="text">
                <p className='road'>ROAD RANGE 2022</p>
                <h1 className='vanquish'>Vanquish Comp Carbon</h1>
                <p className='modulus'>High modulus carbon frame produces aerodynamic efficiency and stiffness through the use of kommtail shaped tubes</p>
                <h2>$1195.00</h2>
                <div className="slide-buttons">
                  <button className="slide-button1">SHOP NOW</button>
                  <button className="slide-button2">EXPLORE PRODUCTS</button>
                </div>
              </div>
              <div className="image">
                <img src={slide1} alt="Slide 1" />
              </div>
            </div>
          )}
          {index === 1 && (
            <div className="center-content">
              <div className="text">
                <p className='new'>FOX SERIE X</p>
                <h1 className='generation'>The Next Generation Of Bikes</h1>
                <p className='new'>SAVE $150 WITH ORDERS OVER $1500</p>
                <button className="explore">EXPLORE PRODUCTS</button>
              </div>
            </div>
          )}
          {index === 2 && (
            <div className="center-content">
              <div className="text">
                <p className='slash'>SLASH 9.8 GX</p>
                <h1 className='sporty'>SPORTY RIDE OR SPEEDY COMMUTER</h1>
                <p className='slash'>FIND OUT WHERE TO BUY CYCLING PRODUCTS</p>
                <button className="explore">LOCATE CLOSEST DEALER</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <button className="nav-btn prev" onClick={goPrev}>‹</button>
      <button className="nav-btn next" onClick={goNext}>›</button>
    </section>
  );
}

export default Hero;
