/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
import "../Goals/Goals.scss";
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
const WhoWeAre = ({ mainImg }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = mainImg;
  }, [mainImg]);
  return (
    <section className="desc overflow-hidden p-[50px_15px] lg:p-[50px_60px] flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className=" flex justify-between flex-col-reverse lg:flex-row items-center gap-5">
        <motion.div
          className=" 
           img md:w-[550px]  md:h-[550px] w-[275px] h-[275px]  "
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
        >
          {!imgLoaded && (
            <Blurhash
              hash="L8LN.1^200~Wxn={sDRjIstR00IV"
              width="100%"
              height="100%"
            />
          )}
          {imgLoaded && (
            <img
              loading="lazy"
              src={mainImg}
              alt=""
              className="rounded-[50%] w-full h-full    outline-dashed outline-primary md:p-5 p-3 object-cover"
            />
          )}
        </motion.div>
        <motion.div
          className=" w-full lg:w-[45%] flex flex-col gap-5 pt-4"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <SectionHeading title="Who Are" title2="We?" />
          <motion.p
            className="text-white text-xl  p-4 bg-primary"
            variants={textVariants}
          >
            <span className="text-Secondary">OFT</span> is an administrative
            company specializing in multiple services from consulting and
            training to auditing and verification. Additionally,{" "}
            <span className="text-Secondary">OFT</span> provides contributes to
            the rehabilitation and restructuring of the administrative,
            financial, and operational processes within establishments. Our
            scope extends to public relations services, labor consultations, the
            preparation of economic feasibility studies for projects, and
            conducting financial and accounting analyses.
          </motion.p>
          <motion.p
            className="text-gray-500  text-xl md:p-7 p-4"
            variants={textVariants}
          >
            Our team is dedicated to establishing companies and fostering
            business development by creating comprehensive plans and solutions.
            <span className="text-primary">OFT</span> specializes in guiding
            companies through the process of entering the investment market in
            Syria, offering support from the conceptual stage to the initiation
            of operations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
