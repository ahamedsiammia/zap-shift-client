import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const Brand = () => {
  // https://i.ibb.co.com/wZQBRwKQ/amazon.png
  // https://i.ibb.co.com/HLDKBZxq/casio.png
  // https://i.ibb.co.com/q3KFcq55/moonstar.png
  // https://i.ibb.co.com/Kjpts1gb/randstad.png
  // https://i.ibb.co.com/gbn7hKg6/star.png
  // https://i.ibb.co.com/ycrfRLT0/start-people.png

  return (
    <div className="my-10">
      <div>
        <h1 className="font-bold text-center text-2xl my-5" >We've helped thousands of sales teams</h1>
      </div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, ]}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co.com/wZQBRwKQ/amazon.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/HLDKBZxq/casio.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/q3KFcq55/moonstar.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/Kjpts1gb/randstad.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/gbn7hKg6/star.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/ycrfRLT0/start-people.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/m5Rw61Z1/Screenshot-2026-02-15-202204.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brand;
