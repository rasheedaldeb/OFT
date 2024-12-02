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
const Management = ({ content }) => {
  return (
    <section className="flex flex-col gap-5 items-center p-[30px_20px_15px] md:p-[30px_60px_40px] overflow-hidden">
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
      <motion.div
        variants={textVariants2}
        initial="initial"
        whileInView="animate"
        className="bg-primary rounded-md"
      >
        <p className="p-5 text-white text-lg">
          These auditing activities are instrumental in helping companies
          achieve their goals, improve performance, and provide tailored
          solutions to maximize the efficient use of available resources. Our
          dedicated approach ensures that businesses are wellpositioned for
          success and sustainability in their respective industries. Prepare for
          your business to not only flourish but to reach unprecedented levels
          of success!
        </p>
      </motion.div>
    </section>
  );
};

export default Management;
