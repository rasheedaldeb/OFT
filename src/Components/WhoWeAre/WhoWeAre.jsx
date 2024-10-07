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
const WhoWeAre = () => {
  return (
    <section className="desc overflow-hidden p-[50px_25px] lg:p-[50px_60px] flex flex-col-reverse lg:flex-row justify-between items-center">
      <motion.div
        className="image-section w-full lg:w-[45%] flex items-center justify-center"
        variants={imageVariants}
        initial="initial"
        whileInView="animate"
      >
        <LazyLoadImage
          effect="blur"
          loading="lazy"
          src="/images/who.jpg"
          alt=""
          placeholderSrc={<BounceLoader color="#1ABA9E" />}
          className="rounded-[50%] lg:w-[600px] h-[400px] md:w-[550px]  lg:h-[550px] outline-dashed outline-primary p-5 object-cover"
        />
      </motion.div>
      <motion.div
        className=" w-full lg:w-[45%] flex flex-col gap-5 pt-4"
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        <SectionHeading title="Who Are" title2="We?" />
        <motion.p
          className="text-white text-xl p-7 bg-primary"
          variants={textVariants}
        >
          <span className="text-Secondary">OFT</span> is an administrative
          company specializing in multiple services from consulting and training
          to auditing and verification. Additionally,{" "}
          <span className="text-Secondary">OFT</span> provides contributes to
          the rehabilitation and restructuring of the administrative, financial,
          and operational processes within establishments. Our scope extends to
          public relations services, labor consultations, the preparation of
          economic feasibility studies for projects, and conducting financial
          and accounting analyses.
        </motion.p>
        <motion.p
          className="text-gray-500  text-xl p-7"
          variants={textVariants}
        >
          Our team is dedicated to establishing companies and fostering business
          development by creating comprehensive plans and solutions.
          <span className="text-primary">OFT</span> specializes in guiding
          companies through the process of entering the investment market in
          Syria, offering support from the conceptual stage to the initiation of
          operations.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
