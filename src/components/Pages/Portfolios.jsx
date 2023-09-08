import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./portfolios.css";
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

const slides = [image01, image02, image03,image04,image05,image06,image07,image08,image09, /* ... other images */];
const Portfolios = () => {
    const [centerIndex, setCenterIndex] = React.useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0', // Adjust this value if needed
        beforeChange: (current, next) => setCenterIndex(next),
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0' // Adjust this value for mobile if needed
                }
            }
        ]
    };
    

    return (
        <div className="portfolio-container">
            <h1>My Work</h1>
            <Slider {...settings}>
                {slides.map((image, idx) => (
                    <div key={idx}>
                        <div
                            className={`slider-slide ${
                                idx === centerIndex ? "center-slide" :
                                idx === centerIndex - 1 ? "left-of-center" :
                                idx === centerIndex + 1 ? "right-of-center" : ""
                            }`}
                        >
                            <img
                                src={image}
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