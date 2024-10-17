/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
const textVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const text2Variants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const imageVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const MainServices = ({ img }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImageLoaded(true);
    };
    image.src = img;
  }, [img]);
  return (
    <section className="flex flex-col items-center gap-7 p-[50px_15px] lg:p-[70px_60px] overflow-hidden">
      <SectionHeading title="Main" title2="Services" />
      <div className="service-content flex justify-between flex-col-reverse lg:flex-row items-center gap-5">
        <motion.div
          className=" 
        img md:w-[550px]  md:h-[550px] w-[275px] h-[275px]  "
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
        >
          {!imageLoaded && (
            <Blurhash
              hash="LIDJ6R9GR#NH~WWVRjtQnMxZS$t6"
              width="100%"
              height="100%"
            />
          )}
          {imageLoaded && (
            <img
              loading="lazy"
              src={img}
              alt=""
              className="rounded-[50%] w-full h-full    outline-dashed outline-primary md:p-5 p-3 object-cover"
            />
          )}
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="w-full lg:w-[45%] flex flex-col gap-5"
        >
          <motion.p
            variants={textVariants}
            className="text-lg text-gray-500 p-3"
          >
            Our services extend beyond conventional financial and marketing
            management, aiming to redefine the landscape of business success.
            <span className="text-primary font-bold">OFT</span> take pride in
            being a catalyst for positive change, collaborating with our team of
            highly experienced professionals and leveraging cutting-edge
            financial and management tools to offer innovative and effective
            solutions.
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-lg text-white p-3 bg-primary"
          >
            <span className="text-Secondary font-bold">Beginning with</span> a
            meticulous analysis of financial statements, encompassing budget
            preparation, financial reporting, and cash flow management,{" "}
            <span className="text-Secondary font-bold">OFT</span>
            cover a comprehensive spectrum of financial services. Our commitment
            doesn't stop there!
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-gray-500 text-lg p-3 "
          >
            In the realm of business development,{" "}
            <span className="text-primary font-bold">OFT</span> offer a suite of
            services, including economic feasibility studies, market analysis,
            and in-depth market studies. OFT excel in identifying investment
            opportunities and devising and implementing growth strategies that
            position businesses for long-term success.
          </motion.p>
        </motion.div>
      </div>
      <motion.p
        variants={text2Variants}
        initial="initial"
        whileInView="animate"
        className="bg-primary text-xl p-5 rounded-md text-white text-center leading-10"
      >
        Our goal is not just to meet expectations but to exceed them, providing
        holistic and transformative solutions that empower businesses to thrive
        in dynamic markets. OFT offers a suite of auditing and verification
        services designed to empower businesses and enhance their performance.
      </motion.p>
    </section>
  );
};

export default MainServices;
