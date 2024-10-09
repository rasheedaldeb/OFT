<Swiper
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  className="mySwiper"
  autoplay={{
    delay: 7000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
>
  <div>
    <SwiperSlide className="bg-primary p-5 rounded-md flex flex-col items-center">
      <span>
        <img src="/images/icons8-about.svg" alt="" className="w-[50px]" />
      </span>
      <p className="text-Secondary text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        repellendus nam voluptate expedita laboriosam eum neque nisi vel, amet
        ipsam dicta doloribus vitae, voluptates architecto! Sint voluptas porro
        blanditiis fuga.
      </p>
    </SwiperSlide>
  </div>
</Swiper>;
