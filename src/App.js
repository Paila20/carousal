import React, { useState, useEffect } from 'react';
import './App.css';
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';

function App() {
 
  const [slide, setSlide] = useState(0);
  const slides = [
    { 'imageSrc': image1, 'title': 'Slide 1' },
    { 'imageSrc': image2, 'title': 'Slide 2' },
    { 'imageSrc': image3, 'title': 'Slide 3' },
  ];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const avatars = [image1, image2, image3, image1];
  const images = [image1, image2, image3 ]

  function nextSlide() {
    setSlide((slide + 1)%3);
}
function prevSlide() {
    if(slide===0){
        setSlide(2);
    }
    else{
    setSlide((slide - 1)%3);
    }
}

useEffect(()=>{
  const loop=setInterval(() => {
    setSlide(s=>(s+1)%3);
}, 3000);
    clearInterval(loop);

  
},[])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!isValidEmail(e.target.value)); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(!isValidPassword(e.target.value)); 
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const isValidPassword = (password) => password.length >= 8;

  return (
    <div className="app">
  
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>Prev</button>
        <div className="carousel">
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === slide ? 'active' : ''}`}
              >
                <img src={slide.imageSrc} alt={slide.title}  className='carousel-image'/>
            
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === slide ? 'active' : ''}`}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>Next</button>
      </div>


      <div className="input-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className={emailError ? 'error' : ''}
        />
        {emailError && <p className="error-message">Invalid email</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordError ? 'error' : ''}
        />
        {passwordError && <p className="error-message">Password must be at least 8 characters</p>}
      </div>

      <div className="scrollable-sections">
        <div className="avatars">
          {avatars.map((avatar, index) => (
            <img key={index} src={avatar} alt={`Avatar`} />
          ))}
        </div>
        <div className="images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`carousal`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
