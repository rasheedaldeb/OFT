/* eslint-disable react/prop-types */
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
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
const cardVariants = {
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
const AboutUsSection = ({ content, info }) => {
  return (
    <section className="p-[50px_15px] lg:p-[70px_60px] flex flex-col items-center justify-center gap-5 overflow-hidden ">
      <SectionHeading title="Who Are" title2="We?" />
      <motion.div
        className="card border-t-[5px] border-primary bg-Secondary rounded-md p-5 flex flex-col items-center gap-2"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
      >
        <img src="/images/about-light.svg" alt="" />
        <p className="text-lg text-primary">{info}</p>
      </motion.div>
      <motion.div
        className="cards flex gap-3 flex-col lg:flex-row  overflow-hidden"
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        {content.map((item, i) => (
          <div
            className="card border-t-[5px] border-Secondary bg-primary rounded-md p-5 flex flex-col items-center gap-3"
            key={i}
          >
            <img src="/images/about-dark.svg" alt="" />
            <p className="text-Secondary text-lg">{item.info}</p>
          </div>
        ))}
      </motion.div>
      <div></div>
    </section>
  );
};

export default AboutUsSection;
