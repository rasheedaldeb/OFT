/* eslint-disable react/prop-types */
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BounceLoader } from "react-spinners";
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
const Goals = ({ goals }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-6 justify-between p-[50px_25px] lg:p-[70px_60px] overflow-hidden">
      <motion.div
        className="img lg:w-[550px]  lg:h-[550px] w-[360px] h-[350px] "
        variants={imageVariants}
        initial="initial"
        whileInView="animate"
      >
        <LazyLoadImage
          effect="blue"
          src="/public/images/goal.jpg"
          alt=""
          className="w-full h-full  rounded-full outline-dashed outline-primary p-5"
          width="100%"
          height="100%"
          placeholderSrc={<BounceLoader color="#1ABA9E" />}
        />
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
                <LazyLoadImage
                  effect="blur"
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
