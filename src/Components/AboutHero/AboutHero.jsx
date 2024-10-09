/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.1,
    },
  },
};
const AboutHero = ({ title, subtitle, slogin }) => {
  return (
    <section className="overflow-hidden">
      <motion.div
        className=" flex flex-col items-center pt-5 gap-5 "
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        <h3 className="md:text-2xl text-xl font-medium text-gray-500">
          {title}
        </h3>
        <h1 className="md:text-8xl text-5xl font-bold text-primary">
          {subtitle}
        </h1>
        <p className="lg:w-[75%] px-3 lg:p-0 text-center text-xl text-gray-500 leading-10">
          {slogin}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
