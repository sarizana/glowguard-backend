import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CareSection.css";
import { useNavigate } from "react-router-dom";
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";

const CareSection = () => {
  const navigate = useNavigate();

  return (
    <section className="care-section">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="care-slider"
      >
        {/* ✅ First Slide */}
        <SwiperSlide className="care-slide">
          <div className="slide-content">
            <div className="image-container first-slide-img">
              <img src={slide1} alt="Eternal Beauty" className="care-image" />
            </div>
            <div className="text-overlay first-slide-text">
              <h1 className="slide-title">Elevate your beauty with science</h1>
              <div className="text-line"></div>
              <p className="slide-subtext">
                Experience a new era of skincare where luxury meets technology.
                Our advanced solutions bring out your natural glow through a blend
                of science and nature. Join us in redefining beauty, one radiant
                step at a time.
              </p>
              <button className="slide-button" onClick={() => navigate("/about")}>
                Read more
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ✅ Second Slide */}
        <SwiperSlide className="care-slide">
          <div className="slide-content second-slide">
            <div className="text-overlay second-slide-text">
              <h1 className="slide-title">GlowGuard, your skincare guide.</h1>
              <div className="text-line"></div>
              <p className="slide-subtext">
                Built to deliver product recommendations and routines that work for you.
                Our AI-powered analysis and Doctors help you achieve the best version of your skin.
              </p>

              {/* ✅ Buttons Fixed Here */}
              <div className="button-container">
                {/* Left Button */}
                <button className="slide-button button-left" onClick={() => navigate("/Ai")}>
                  Scan Your Skin
                </button>

                {/* Right Button */}
                <button className="slide-button button-right" onClick={() => navigate("/experts")}>
                  See a Professional
                </button>
              </div>
            </div>
            <div className="image-container second-slide-img">
              <img src={slide2} alt="AI Skincare" className="care-image second-image" />
            </div>
          </div>
        </SwiperSlide>

        {/* ✅ Third Slide */}
        <SwiperSlide className="care-slide">
          <div className="slide-content">
            {/* Left Side Image */}
            <div className="image-container third-slide-img">
              <img src={slide3} alt="Tailored Skincare" className="care-image" />
            </div>

            {/* Right Side Text */}
            <div className="text-overlay third-slide-text">
              <h1 className="slide-title">Tailored Skincare</h1>
              <div className="text-line"></div>
              <p className="slide-subtext">
                Build a skincare routine designed specifically for you.
              </p>
              <button className="third-slide-button" onClick={() => navigate("/routine")}>
                Start Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CareSection;
