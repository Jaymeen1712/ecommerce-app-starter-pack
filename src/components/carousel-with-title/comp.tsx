"use client";
import React from "react";
import Slider from "react-slick";
import CarouselSingleContainer from "../carousel-single-container";

import "./comp.css";

interface CarouselWithTitleProps {
  title: string | React.ReactNode;
  items: any;
}

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CarouselWithTitle: React.FC<CarouselWithTitleProps> = ({
  items,
  title,
}) => {
  return (
    <div className="container">
      <div>{title}</div>

      <div className="slider-container">
        <Slider {...settings}>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselSingleContainer key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselWithTitle;
