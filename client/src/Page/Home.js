// import React, { useState } from "react";
// import Slider from "./Slider";
// import MenuCard from "./MenuCard";
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import slides from './mock.json';
// import Carousel from 'react-bootstrap/Carousel';
// import image1 from '../assets/calzone.png';
// import image2 from '../assets/chickensalad.png';
// import image3 from '../assets/coldsub.png';
// import image4 from '../assets/hotsub.png';
// import image5 from '../assets/meatballsliders.png';
// import image6 from '../assets/pasta.png';
// import image7 from '../assets/pizza.png';
// import image8 from '../assets/sausagerolls.png';
// import image9 from '../assets/stromboli.png';
// import image10 from '../assets/tiramisu.png';
// import image11 from '../assets/beer.png';
// const Home = () => {
//     // const sliderData = [
//     //     {
//     //         image: 's1.jpg',
//     //         title: 'Daily Lunch Specials 11 am - 4 pm',
//     //         subTitle: '2 slices of cheese pizza & 20 oz fountain drink, 1 slice cheese pizza and small house salad & 20 oz fountain drink, 6 inch cold sub, french fries & 20 oz fountain drink',
//     //         interval: 3000,
//     //     },
//     //     {
//     //         image: 's2.jpg',
//     //         title: 'This is an all day special',
//     //         subTitle: 'Large 16 inch 1 Topping pizza & 10 wings $29.99 + tax additional toppings $2.75 each',
//     //         interval: 500,
//     //     }
//     // ];
//     const [index, setIndex] = useState (0);
//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     }
//  return (
//     <div className="home">
//       <section className="hero">
//         <Slider slides={ slides } />
//         <Carousel activeIndex={index}
//                onSelect={handleSelect}>
//          {slides.map((slide) => (
//         <Carousel.Item key ={slide.image} interval={slide.interval}>
//          <img
//          className="d-block w-100"
//         src= {slide.image}
//          alt="First slide"
//          />
//         <Carousel.Caption>
//           <h3>{slide.title}</h3>
//           <p>{slide.subTitle}</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//          ))}
//     </Carousel>
//       </section>
//       <section className="featured-products">
//         <h2>Featured Products</h2>
//         <MenuCard />
//         <div className="container mt-3">
//                  <div className="row">
//                    <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image1} alt=""/>
//                          <div className="card-body">
//                              <h3>Calzone</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image2} alt=""/>
//                          <div className="card-body">
//                              <h3>Chicken Salad</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image3} alt=""/>
//                          <div className="card-body">
//                              <h3>Cold Sub</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                     <div className="card shadow-lg">
//                         <img src={image4} alt=""/>
//                          <div className="card-body">
//                              <h3>Hot Sub</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image5} alt=""/>
//                          <div className="card-body">
//                              <h3>Meatball Sliders</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image6} alt=""/>
//                          <div className="card-body">
//                              <h3>Pasta</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image7} alt=""/>
//                          <div className="card-body">
//                              <h3>Pizza</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image8} alt=""/>
//                          <div className="card-body">
//                              <h3>Sausage Rolls</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image9} alt=""/>
//                          <div className="card-body">
//                              <h3>Stromboli</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image10} alt=""/>
//                          <div className="card-body">
//                              <h3>Tiramisu</h3>
//                      </div>
//                      </div>
//                      </div>
//                      <div className="col-md-4">
//                      <div className="card shadow-lg">
//                          <img src={image11} alt=""/>
//                          <div className="card-body">
//                              <h3>Beer</h3>
//                      </div>
//                      </div>
//                      </div>
//                      </div>
//                      </div>
//       </section>
//     </div>
//   );
// };
// export default Home;

import React, { useState } from 'react';
import Slider from './Slider';
import MenuCard from './MenuCard';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import slides from './mock.json';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/calzone.png';
import image2 from '../assets/chickensalad.png';
import image3 from '../assets/coldsub.png';
import image4 from '../assets/hotsub.png';
import image5 from '../assets/meatballsliders.png';
import image6 from '../assets/pasta.png';
import image7 from '../assets/pizza.png';
import image8 from '../assets/sausagerolls.png';
import image9 from '../assets/stromboli.png';
import image10 from '../assets/tiramisu.png';
import image11 from '../assets/beer.png';
const Home = () => {
    const sliderData = [
        {
            image: 's1.jpg',
            title: 'Daily Lunch Specials 11 am - 4 pm',
            subTitle: '2 slices of cheese pizza & 20 oz fountain drink, 1 slice cheese pizza and small house salad & 20 oz fountain drink, 6 inch cold sub, french fries & 20 oz fountain drink',
            interval: 3000,
        },
        {
            image: 's2.jpg',
            title: 'This is an all day special',
            subTitle: 'Large 16 inch 1 Topping pizza & 10 wings $29.99 + tax additional toppings $2.75 each',
            interval: 500,
        }
    ];
    const [index, setIndex] = useState (0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
 return (
    <div className="home">
      <section className="hero">
        <Slider slides={ sliderData } />
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
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <MenuCard />
        <div className="container mt-3">
                 <div className="row">
                   <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image1} alt=""/>
                         <div className="card-body">
                             <h3>Calzone</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image2} alt=""/>
                         <div className="card-body">
                             <h3>Chicken Salad</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image3} alt=""/>
                         <div className="card-body">
                             <h3>Cold Sub</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                    <div className="card shadow-lg">
                        <img src={image4} alt=""/>
                         <div className="card-body">
                             <h3>Hot Sub</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image5} alt=""/>
                         <div className="card-body">
                             <h3>Meatball Sliders</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image6} alt=""/>
                         <div className="card-body">
                             <h3>Pasta</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image7} alt=""/>
                         <div className="card-body">
                             <h3>Pizza</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image8} alt=""/>
                         <div className="card-body">
                             <h3>Sausage Rolls</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image9} alt=""/>
                         <div className="card-body">
                             <h3>Stromboli</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image10} alt=""/>
                         <div className="card-body">
                             <h3>Tiramisu</h3>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card shadow-lg">
                         <img src={image11} alt=""/>
                         <div className="card-body">
                             <h3>Beer</h3>
                     </div>
                     </div>
                     </div>
                     </div>
                     </div>
      </section>
    </div>
  );
};
export default Home;