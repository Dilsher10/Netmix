import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function ServiceSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="text-center">
        <Image src="/remote.png" width={50} height={50} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Home broadband</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">We offer a fantastic range of client-oriented home broadband services</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/remote.png" width={50} height={50} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Home broadband</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">We offer a fantastic range of client-oriented home broadband services</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/remote.png" width={50} height={50} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Home broadband</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">We offer a fantastic range of client-oriented home broadband services</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/remote.png" width={50} height={50} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Home broadband</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">We offer a fantastic range of client-oriented home broadband services</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/remote.png" width={50} height={50} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Home broadband</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">We offer a fantastic range of client-oriented home broadband services</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
      <div className="text-center">
        <Image src="/remote.png" width={50} height={50} className="mx-auto" />
        <h3 className="text-white py-5 text-[18px] font-bold">Home broadband</h3>
        <p className="text-gray-400 px-7 text-sm pb-5">We offer a fantastic range of client-oriented home broadband services</p>
        <Link href="" className="button arrow text-[#2cffc8] text-sm">Read more</Link>
      </div>
    </Slider>
  );
}