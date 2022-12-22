import React from "react";
import Banner1 from "../../../assets/images/banner/1.jpg";
import Banner2 from "../../../assets/images/banner/2.jpg";
import Banner3 from "../../../assets/images/banner/3.jpg";
import Banner4 from "../../../assets/images/banner/4.jpg";
import Banner5 from "../../../assets/images/banner/5.jpg";
import Banner6 from "../../../assets/images/banner/6.jpg";
import Slide from "./Slide";
import './Slide.css'

const Banner = () => {
  const slidersData = [
    {
      prev: 6,
      id: 1,
      img:Banner5,
      next:2
    },
    {
      prev: 1,
      id: 2,
      img:Banner2,
      next:3
    },
    {
      prev: 2,
      id: 3,
      img:Banner3,
      next:4
    },
    {
      prev: 3,
      id: 4,
      img:Banner4,
      next:5
    },
    {
      prev: 4,
      id: 5,
      img:Banner1,
      next:6
    },
    {
      prev: 5,
      id: 6,
      img:Banner6,
      next:1
    },
  ]
  return (
    <div className="carousel w-full rounded-lg my-10">
      {
        slidersData.map(slide => <Slide key={slide.id} slide={ slide} />)
      }
      {/* <div id="slide1" className="carousel-item relative w-full">
        <div className="carousel-img">
        <img src={Banner1} alt="banner" className="w-full" />
        </div>
        <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/4">
                  <h1 className="text-6xl font-bold text-white">
                      Affordable <br />
                      Price For Car <br />
                      Servicing
                  </h1>
        </div>
        <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
                  <p className="text-xl w-1/2 mt-8 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-3/4">
                  <div className="flex mr-5">
                  <button className="btn btn-secondary mr-5">Discover More</button>
                  <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mx-2">
            ←
          </a>
          <a href="#slide2" className="btn btn-circle">
            →
          </a>
        </div>
      </div> */}
      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={Banner2} alt="banner" className="w-full lg:h-[600px]" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mx-2">
            ←
          </a>
          <a href="#slide3" className="btn btn-circle">
            →
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Banner3} alt="banner" className="w-full lg:h-[600px]" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mx-2">
            ←
          </a>
          <a href="#slide4" className="btn btn-circle">
            →
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={Banner4} alt="banner" className="w-full lg:h-[600px]" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mx-2">
            ←
          </a>
          <a href="#slide1" className="btn btn-circle">
            →
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
