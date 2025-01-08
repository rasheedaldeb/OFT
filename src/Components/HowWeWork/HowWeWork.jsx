import React from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
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
const textVariants2 = {
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
const HowWeWork = () => {
  return (
    <section className="flex flex-col gap-5 items-center p-[30px_20px_15px] md:p-[30px_60px_40px] overflow-hidden">
      <SectionHeading title="How We" title2="Work?" />
      <motion.div
        variants={textVariants2}
        initial="initial"
        whileInView="animate"
        className="bg-primary rounded-md"
      >
        <p className="p-5 text-white text-lg">
          OFT is committed to adhering to local laws, regulations, and a strict
          global code of conduct for all employees. Ethical management is viewed
          not only as a response to rapid global changes but also as a means to
          build trust with stakeholders. This includes customers, employees,
          business partners, and local communities, with the ultimate goal of
          becoming one of the most ethical companies globally.
        </p>
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="bg-Secondary rounded-md"
      >
        <p className="p-5 text-primary text-lg">
          OFT continues its commitment to employee training, monitoring systems,
          and the practice of corporate governance with integrity and
          transparency. These efforts underscore OFT`s dedication to corporate
          social responsibility as a business leader. The Corporate Business
          Principles announced in 2023 serve as the foundation for its global,
          international, and local code of conduct, aligning with legal and
          ethical standards and fulfilling its corporate social
          responsibilities.
        </p>
      </motion.div>
    </section>
  );
};

export default HowWeWork;
