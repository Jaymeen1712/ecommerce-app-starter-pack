"use client";
import { Product } from "@prisma/client";
import React from "react";
import Slider from "react-slick";
import CarouselSingleContainer from "../carousel-single-container";
import "./comp.css";

interface CarouselWithTitleProps {
  title: string | React.ReactNode;
  products: Product[];
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
  products,
  title,
}) => {
  return (
    <div className="container">
      <div>{title}</div>

      <div className="slider-container">
        <Slider {...settings}>
          {products.map((product, index) => (
            <CarouselSingleContainer key={index} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselWithTitle;
