import Carousel from 'react-bootstrap/Carousel';
import React, { useState} from 'react';
import './'

function Slider({ slides }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        console.log('selected index: ', selectedIndex)
        setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} 
              onSelect={handleSelect}>
        {slides.map((slide) => (
        <Carousel.Item key ={slide.image} interval={slide.interval}>
        <img
        className="d-block w-100"
        src= {slide.image}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>{slide.title}</h3>
          <p>{slide.subTitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default Slider;