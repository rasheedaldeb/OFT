/* eslint-disable react/prop-types */
import "./Provide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../SectionHeading";
import { Autoplay, Pagination } from "swiper/modules";
const responsive = {
  0: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
  },
};
const Provide = ({ content }) => {
  return (
    <section className="p-[30px_20px_15px] md:p-[30px_60px_40px] flex flex-col items-center gap-5">
      <SectionHeading title="What We" title2="Provide" />
      <Swiper
        className="mySwiper"
        breakpoints={responsive}
        slidesPerView={5}
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        {content.map((item, i) => (
          <SwiperSlide
            key={i}
            className="h-[300px] lg:h-auto p-5 flex flex-col items-center gap-3 rounded-md  border-t-8 border-primary"
            style={{ backgroundColor: "#3C4048" }}
          >
            <h3 className="text-white text-lg">{item.title}</h3>
            <p className="text-primary">{item.subtitle}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Provide;
