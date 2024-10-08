import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Blurhash } from "react-blurhash";
import "../Goals/Goals.scss";
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
const Values = ({ mainImg }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = mainImg;
  }, [mainImg]);
  return (
    <section className="flex flex-col items-center gap-7 ">
      <SectionHeading title="Our" title2="Values" />
      <div
        className=" p-[30px_20px_15px] md:p-[30px_60px_40px] overflow-hidden
      values-section w-full flex flex-col lg:flex-row  justify-between items-center bg-primary"
      >
        <motion.div
          className="values flex gap-16 flex-col md:flex-row"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div
            className="first flex flex-col gap-10"
            variants={textVariants}
          >
            <motion.div className="value" variants={textVariants}>
              <p className="md:text-5xl text-3xl text-Secondary flex items-center">
                <span
                  className=" flex items-center justify-center
                bg-Secondary md:w-[75px] md:h-[75px] w-[50px] h-[50px]  rounded-full text-white"
                >
                  Pr
                </span>
                ecision
              </p>
            </motion.div>
            <motion.div className="value" variants={textVariants}>
              <p className="md:text-5xl text-3xl text-Secondary flex items-center">
                <span
                  className=" flex items-center justify-center
                bg-Secondary md:w-[75px] md:h-[75px] w-[50px] h-[50px]  rounded-full text-white"
                >
                  Pr
                </span>
                ivacy
              </p>
            </motion.div>
            <div className="value">
              <p className="md:text-5xl text-3xl text-Secondary flex items-center">
                <span
                  className=" flex items-center justify-center
                bg-Secondary md:w-[75px] md:h-[75px] w-[50px] h-[50px]  rounded-full text-white"
                >
                  De
                </span>
                termination
              </p>
            </div>
          </motion.div>
          <div className="second flex flex-col justify-center gap-12">
            <div className="value">
              <p className="md:text-5xl text-3xl text-Secondary flex items-center">
                <span
                  className=" flex items-center justify-center
                bg-Secondary md:w-[75px] md:h-[75px] w-[50px] h-[50px]  rounded-full text-white"
                >
                  Pa
                </span>
                rtnership
              </p>
            </div>
            <div className="value">
              <p className="md:text-5xl text-3xl text-Secondary flex items-center">
                <span
                  className=" flex items-center justify-center
                bg-Secondary md:w-[75px] md:h-[75px] w-[50px] h-[50px]  rounded-full text-white"
                >
                  Co
                </span>
                mmitment
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          className="img md:w-[350px] md:h-[350px] w-[275px] h-[275px] pt-3 md:p-0"
        >
          {!imgLoaded && (
            <Blurhash
              hash="L27on;aK8wD5%iRPozt700t9.S.S"
              width="100%"
              height="100%"
              resolutionX={32}
              resolutionY={32}
              punch={2}
            />
          )}
          {imgLoaded && (
            <img
              loading="lazy"
              src={mainImg}
              alt=""
              className=" w-full h-full rounded-full outline-dashed outline-Secondary p-2"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
