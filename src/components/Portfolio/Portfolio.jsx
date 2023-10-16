import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/ecommerce.png";
import Ecommerce from "../../img/DogsMomCircle.svg";
import HOC from "../../img/Puredome.svg";
import RealEstate from "../../img/Screenshot from 2022-12-28 18-08-16.png";
import Civil from "../../img/Screenshot from 2023-01-14 23-32-28.png";
import groomroom from "../../img/Screenshot from 2023-01-29 19-10-39.png";
import pureMax from "../../img/Screenshot from 2023-09-12 12-47-47.png";
import pureprivacy from "../../img/Screenshot from 2023-09-12 12-48-00.png";
import heroes from "../../img/Screenshot from 2023-09-12 12-49-01.png";
import cardsHeroes from "../../img/Screenshot from 2023-09-12 12-49-20.png";

import dedicatedIpBg from "../../img/Screenshot from 2023-09-12 12-51-40.png";
import tracker from "../../img/Screenshot from 2023-10-16 15-25-37.png";
import trackerManagment from "../../img/Screenshot from 2023-10-16 15-26-34.png";
import trackerMana from "../../img/Screenshot from 2023-10-16 15-26-34.png";
import trackerMa from "../../img/Screenshot from 2023-10-16 15-29-35.png";
import trackerNew from "../../img/Screenshot from 2023-10-16 15-29-35.png";
import trackerNew1 from "../../img/Screenshot from 2023-10-16 15-30-01.png";
import trackerNew2 from "../../img/Screenshot from 2023-10-16 15-32-37.png";
import trackerNew3 from "../../img/Screenshot from 2023-10-16 15-32-57.png";
import trackerNew4 from "../../img/Screenshot from 2023-10-16 15-34-55.png";
import trackerNew5 from "../../img/Screenshot from 2023-10-16 15-35-23.png";
import trackerNew6 from "../../img/Screenshot from 2023-10-16 15-38-53.png";






















import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RealEstate} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Civil} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={groomroom} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={pureMax} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pureprivacy} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroes} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cardsHeroes} alt="" />
        </SwiperSlide>



        <SwiperSlide>
          <img src={dedicatedIpBg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tracker} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trackerManagment} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={trackerMana} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trackerMana} alt="" />
        </SwiperSlide>


        <SwiperSlide>
          <img src={trackerMa} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={trackerNew} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trackerNew1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trackerNew2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trackerNew3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trackerNew4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trackerNew5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trackerNew6} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
      <div className="portfolio" id="portfolio">
        {/* heading */}
        <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
        <span>Links</span>
        <br />
        <a style={{ color: 'gray', fontSize: 35 }} target="_blank" rel="noreferrer" href="https://www.puredome.com/">https://www.puredome.com/</a>
        <br />
        
        <a style={{ color: 'gray', fontSize: 35 }} target="_blank" rel="noreferrer" href="https://siddique-shoppping.netlify.app/">https://siddique-shoppping.netlify.app/</a>

        <br />
        <a style={{ color: 'gray', fontSize: 35 }} target="_blank" rel="noreferrer" href="https://groom-room.netlify.app/">https://groom-room.netlify.app/</a>

        <br />

        <a style={{ color: 'gray', fontSize: 35 }} target="_blank" rel="noreferrer" href="https://inaequo.net/">https://inaequo.net/</a>
        <br />

        <a style={{ color: 'gray', fontSize: 35 }} target="_blank" rel="noreferrer" href="https://lovely-crostata-7d1a25.netlify.app/">https://lovely-crostata-7d1a25.netlify.app/</a>



        

      </div>
    </>

  );
};

export default Portfolio;
