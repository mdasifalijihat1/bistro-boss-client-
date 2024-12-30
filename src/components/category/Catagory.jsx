import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../sectionTitle/SectionTitle";

const Catagory = () => {
  return (
    <section>
      <SectionTitle 
      subHeading={'From 11:00am to 10:00pm'}
      heading={'ORDER ONLINE'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded" src={img1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-12 text-white shadow">
            {" "}
            Salads{" "}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded" src={img2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-12 text-white shadow">
            {" "}
            Pizza{" "}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded" src={img3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-12 text-white shadow">
            {" "}
            Soups{" "}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded" src={img4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-12 text-white shadow">
            {" "}
            Desserts{" "}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded" src={img5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-12 text-white shadow">
            {" "}
            Salads{" "}
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagory;
