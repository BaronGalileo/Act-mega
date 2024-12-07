import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export const TestSlider = () => {
  return (
    <div className='div-wrapper'>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true} // Зацикливание слайдера
        speed={2000} // Скорость перехода между слайдами
        autoplay={{
          delay: 2600, // Задержка перед переходом к следующему слайду
          pauseOnMouseEnter: true, // Приостановить автопрокрутку на паузе при наведении
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../images/разворотАлиса.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/разворотАлисаВ зазер.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/ВетерВИвах.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/разворотАлиса.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}