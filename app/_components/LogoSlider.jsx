import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function LogoSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <Slider {...settings}>
            <div>
                <img src="/logo4.png" alt="" />
            </div>
            <div>
                <img src="/logo2.png" alt="" />
            </div>
            <div>
                <img src="/logo3.png" alt="" />
            </div>
            <div>
                <img src="/logo4.png" alt="" />
            </div>
            <div>
                <img src="/logo5.png" alt="" />
            </div>
            <div>
                <img src="/logo3.png" alt="" />
            </div>
            <div>
                <img src="/logo2.png" alt="" />
            </div>
        </Slider>
    );
}