/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Blurhash } from "react-blurhash";
import "../Goals/Goals.scss";
import { useEffect, useState } from "react";
//animation variants//
const textVariants = {
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
const Vision = ({ mainImg }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = mainImg;
  }, [mainImg]);
  return (
    <section
      className=" overflow-hidden border-t-[20px] border-primary items-center
    p-[50px_15px] lg:p-[50px_60px] mt-10 bg-Secondary flex flex-col gap-6 lg:flex-row justify-between"
    >
      <motion.div
        className="vision-content flex flex-col gap-5"
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        {/* heading */}
        <SectionHeading title="Our" title2="Vision:" />
        <motion.p
          className="md:text-7xl text-4xl font-light md:leading-[150px] text-primary"
          variants={textVariants}
        >
          To be the compass and first stop for investment in Syria.
        </motion.p>
      </motion.div>
      <div className="image lg:w-[45%] w-full flex items-center justify-center">
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          className=" img lg:w-[400px] lg:h-[400px] md:w-[500px] md:h-[500px] w-[275px] h-[275px]"
        >
          {!imgLoaded && (
            <Blurhash
              hash="LtHL6p~p-;t7WARjaxoLxZs,WBR*"
              width="100%"
              height="100%"
            />
          )}
          {imgLoaded && (
            <img
              loading="lazy"
              src={mainImg}
              alt=""
              className=" h-full w-full rounded-full outline-dashed outline-primary p-2"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
