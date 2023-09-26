import imgee1 from "../../static/images/bcg1.jpg";
import imgee2 from "../../static/images/ANK_0020.jpg";
import imgee3 from "../../static/images/msg1404115845-1446.jpg";
import imgee4 from "../../static/images/msg1404115845-1445.jpg";
import "./css/Slider.css";
import { useState, useEffect } from "react";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  });

  function showSlide(n) {
    const slides = document.querySelectorAll(".slider img");
    if (n < 0) {
      setSlideIndex(slides.length - 1);
    } else if (n >= slides.length) {
      setSlideIndex(0);
    } else {
      setSlideIndex(n);
    }
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);

  return (
    <div class="slider-container">
      <div class="slider">
        <img
          src={imgee1}
          alt="Slide 1"
          style={{ display: slideIndex === 0 ? "block" : "none" }}
        />
        <img
          src={imgee2}
          alt="Slide 2"
          style={{ display: slideIndex === 1 ? "block" : "none" }}
        />
        <img
          src={imgee3}
          alt="Slide 3"
          style={{ display: slideIndex === 2 ? "block" : "none" }}
        />
        <img
          src={imgee4}
          alt="Slide 4"
          style={{ display: slideIndex === 3 ? "block" : "none" }}
        />
      </div>
      {/* Add more image elements for additional slides */}
      <button className="prev-btn" onClick={() => prevSlide()}>
        {" "}
        <i class="bx bxs-chevron-left" style={{ color: "#1d0476" }}></i>
      </button>
      <button className="next-btn" onClick={() => nextSlide()}>
        <i class="bx bxs-chevron-right" style={{ color: "#1d0476" }}></i>
      </button>
    </div>
  );
};

export default Slider;
