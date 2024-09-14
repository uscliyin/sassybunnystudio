import React, { useState,useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/Slider/Slider1.jpg",
    "/Slider/Slider2.jpg",
    "/Slider/Slider3.jpg",
    "/Slider/Slider4.jpg",
    "/Slider/Slider5.jpg"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };
  // useEffect to handle the auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Call nextSlide every 3 seconds
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentSlide]); // Dependency on currentSlide to reset the interval when it changes
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[3]} alt="" />
        <img src={data[4]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[1]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" >
            <WestOutlinedIcon fontSize="medium" onClick={prevSlide}/>
        </div>
        <div className="icon" >
            <EastOutlinedIcon fontSize="medium" onClick={nextSlide}/>
        </div>
      </div>
    </div>
  );
};

export default Slider;