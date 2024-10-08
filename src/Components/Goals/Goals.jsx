/* eslint-disable react/prop-types */
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import "./Goals.scss";
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
const Goals = ({ goals, mainImg }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = mainImg;
  }, [mainImg]);
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-6 justify-between p-[50px_15px] lg:p-[70px_60px] overflow-hidden">
      <motion.div
        className="img md:w-[550px]  md:h-[550px] w-[275px] h-[275px] "
        variants={imageVariants}
        initial="initial"
        whileInView="animate"
      >
        {!imgLoaded && (
          <Blurhash
            hash="L7JR8W00K-K,00AL$^9D*I0K$k?H"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={2}
            className=" outline-dashed outline-primary "
          />
        )}
        {imgLoaded && (
          <img
            src={mainImg}
            alt=""
            loading="lazy"
            className="w-full h-full  rounded-full outline-dashed outline-primary md:p-5 p-3"
            width="100%"
            height="100%"
          />
        )}
      </motion.div>
      <div className="right lg:w-[47%] w-full">
        <SectionHeading title="Our" title2="Goals" />
        <motion.div
          className="accordions w-full pt-7 flex flex-col gap-5"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          {goals.map((item, i) => (
            <motion.div
              className=" transition-all
              accordion w-full bg-primary px-5 py-2 rounded-xl flex flex-col gap-3 cursor-pointer"
              key={i}
            >
              <div className=" content md:text-xl text-lg flex flex-col md:flex-row  items-center gap-3 h-full text-Secondary transition-all">
                <img
                  loading="lazy"
                  src={item.icon}
                  alt=""
                  className="w-[50px]"
                />
                {item.goal}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Goals;
