import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/portfolios.css";
import image01 from "../images/1.png";
import image02 from "../images/2.png";
import image03 from "../images/3.png";
import image04 from "../images/4.png";
import image05 from "../images/5.png";
import image06 from "../images/6.png";
import image07 from "../images/7.png";
import image08 from "../images/8.png";
import image09 from "../images/9.png";
import transition from "../Transition";

const slides = [
  { image: image01, description: "resto123dzo.com" },
  { image: image02, description: "hoshidongque.com" },
  { image: image03, description: "modedesongles.com" },
  { image: image04, description: "glenarconstruction.com" },
  { image: image05, description: "onglesvert.com" },
  { image: image06, description: "tuyenrestaurant.com" },
  { image: image07, description: "id.vltk2us.com" },
  { image: image08, description: "Jx2US Application" },
  { image: image09, description: "Menu Design" },
  // ... other images with descriptions
];
const Portfolios = () => {
  const [centerIndex, setCenterIndex] = React.useState(0);
  const [workDescription, setWorkdescription] = useState("My Work");
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => {
      setCenterIndex(next);
      setWorkdescription(slides[next].description); // Set the workDescription to the description of the next slide
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="portfolio-container">
      <h1>{workDescription}</h1>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className={`slider-slide ${
                idx === centerIndex
                  ? "center-slide"
                  : idx === centerIndex - 1
                  ? "left-of-center"
                  : idx === centerIndex + 1
                  ? "right-of-center"
                  : ""
              }`}
            >
              <img
                src={slide.image}
                alt={`Image ${idx + 1}`}
                className="slider-image"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default transition(Portfolios);
