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
const Slogin = () => {
  return (
    <section className="flex items-center justify-center pt-10 overflow-hidden">
      <motion.p
        className="flex items-center text-2xl md:text-5xl lg:text-7xl text-primary font-medium gap-2"
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        TURNING IDEAS INT
        <img src="/images/Icon Logo.png" alt="" className="w-[40px]" />
        <span className="text-gray-500">REALITY</span>
      </motion.p>
    </section>
  );
};

export default Slogin;
