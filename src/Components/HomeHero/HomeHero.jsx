import "./HomeHero.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Blurhash } from "react-blurhash";
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "spring",
      duration: 20,
    },
  },
};
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
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
const HomeHero = ({ mainImg }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = mainImg;
  }, [mainImg]);
  return (
    <div className="hero p-[50px_20px_25px] md:p-[50px_60px_40px]">
      <motion.div
        className="slidingTextContainer text-primary"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Own Financial Tactics
      </motion.div>
      <div className="hero-content w-full flex justify-between  flex-col gap-5 lg:flex-row">
        <motion.div
          className="info w-full lg:w-1/2 flex flex-col items-center"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <div>
            <motion.h4
              className="text-4xl font-bold text-gray-500"
              variants={textVariants}
            >
              We are <span className="text-primary">OFT</span>
            </motion.h4>
            <motion.h1
              className="text-[40px] md:text-[70px] font-bold text-primary"
              variants={textVariants}
            >
              Financial,Advisory, <br />
              Service Company.
            </motion.h1>
            <motion.h2 className="text-gray-500 font-semibold text-xl  stroke-primary">
              <span className="text-primary">OFT</span> is an independent entity
              that willingly collaborates with all companies and investors. Its
              primary goal is to effectively pursue the interests of its clients
              while adhering to all relevant laws, principles, and general
              controls. The <span className="text-primary">OFT </span>work team
              ensures that all forms of collaboration are closely monitored and
              conducted under the name of the company.
            </motion.h2>
          </div>
          <motion.img
            src="/images/icons8-down-arrow-100.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="img w-full lg:w-1/2 flex items-center justify-center"
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
        >
          {true && (
            <Blurhash
              hash="LOAp8RiKL1xtD0o|nhR*pbgMm-R*"
              width="100%"
              height="100%"
              resolutionX={32}
              resolutionY={32}
              punch={2}
            />
          )}
          {imgLoaded && (
            <img
              src={mainImg}
              alt=""
              className="w-full  h-full"
              loading="lazy"
              width="100%"
              height="100%"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
