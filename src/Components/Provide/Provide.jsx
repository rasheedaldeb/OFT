/* eslint-disable react/prop-types */
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
const Provide = ({ content }) => {
  return (
    <section className="flex flex-col items-center p-[30px_20px_15px] md:p-[30px_60px_40px] overflow-hidden">
      <SectionHeading title="AUDITING " title2="In Management" />
      <motion.div
        className="cards grid lg:grid-cols-2 md:grid-cols-1 gap-5 pt-5"
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        {content.map((item, i) => (
          <div
            key={i}
            className="card bg-Secondary p-4 rounded-md border-t-8 border-primary"
          >
            <h3 className="text-white text-lg">{item.title}</h3>
            <p className="text-primary">{item.desc}</p>
          </div>
        ))}
      </motion.div>
      <div></div>
    </section>
  );
};

export default Provide;
