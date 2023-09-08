import Carousel from "react-bootstrap/Carousel";
import React from "react";

const carouselData = [
  {
    id: 1,
    name: 'Daily Lunch Specials 11 am - 4 pm',
    description: '2 slices of cheese pizza & 20 oz fountain drink, 1 slice cheese pizza and small house salad & 20 oz fountain drink, 6 inch cold sub, french fries & 20 oz fountain drink',
    image: '{}',
  },
  {
    id: 2,
    name: 'This is an all day special',
    description: 'Large 16 inch 1 Topping pizza & 10 wings $29.99 + tax additional toppings $2.75 each',
    image: '{}',
  }
]

export default function AppCarousel() {
  return (
  <>
    <section id="carousel" className="carousel-block text-center">
      <div className="title-holder">
        <h2>Specialties</h2>
        <div className="subtitle">Skills</div>
      </div>

      <Carousel controls={false}>
        {
          carouselData.map(carousels => {
            return (
              <Carousel.Item key={carousels.id}>
                {carousels.picture}
                <blockquote>
                  <p>
                    {carousels.description}
                  </p>
                  <p>
                    <span className="designation">{carousels.designation}</span>
                  </p>
                </blockquote>
              </Carousel.Item>  
            )
          })
        }                        
      </Carousel>
    </section>
  </>   
  )
};