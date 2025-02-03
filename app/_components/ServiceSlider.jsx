import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

export default function ServiceSlider() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="text-center">
        <Image src="/internet.png" alt="service" width={60} height={60} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Home broadband</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">We offer a fantastic range of client-oriented home broadband services</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/wifi.png" alt="service" width={60} height={60} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">WIFI</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">Access internet service around your home with our routers</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/satellite.png" alt="service" width={60} height={60} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Satellite TV</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">Netmix entertainment means more than just TV or Internet</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/home-security.png" alt="service" width={60} height={60} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Home security</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">Netmix provides extra security for all your devices</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/remote.png" alt="service" width={60} height={60} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Fiber TV box</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">TV packages with plans and channels for different age groups</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
    </Slider>
  );
}