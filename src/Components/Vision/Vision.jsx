import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BounceLoader } from "react-spinners";
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
const Vision = () => {
  return (
    <section
      className=" overflow-hidden border-t-[20px] border-primary items-center
    p-[50px_25px] lg:p-[50px_60px] mt-10 bg-Secondary flex flex-col gap-6 lg:flex-row justify-between"
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
        >
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src="/public/images/vision.jpg"
            alt=""
            placeholderSrc={<BounceLoader color="#1ABA9E" />}
            className="lg:w-[500px] lg:h-[300px] md:w-[500px] md:h-[500px] w-[300px] h-[300px]  rounded-full outline-dashed outline-primary p-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
