/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import { Link } from "react-router-dom";
const textVariants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
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
const Footer = ({ footerMenu, footerMenu2 }) => {
  return (
    <footer className="border-t-8 border-primary mt-5 p-[50px_15px] lg:p-[70px_60px] ">
      <div className="flex justify-between items-center pb-10 flex-col lg:flex-row">
        <div className=" flex flex-col md:flex-row  items-center gap-5 lg:border-r-2  border-primary lg:pr-5">
          <motion.ul
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="flex gap-5
          "
          >
            {footerMenu.map((item, id) => (
              <li key={id}>
                <Link
                  className="text-2xl font-medium text-primary"
                  to={item.path}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </motion.ul>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="animate"
          >
            <LazyLoadImage
              src="/images/OFT ENG.png"
              effect="blur"
              loading="lazy"
              className="lg:w-[200px] w-[150px]"
              placeholderSrc={<BounceLoader color="#1ABA9E" />}
            />
          </motion.div>
          <motion.ul
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="flex gap-5"
          >
            {footerMenu2.map((item, id) => (
              <li key={id}>
                <Link
                  className="text-2xl font-medium text-primary"
                  to={item.path}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          className="right flex flex-col gap-3 items-center lg:w-[45%] w-full lg:p-0 pt-5"
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h1
            className="flex items-center md:text-3xl text-xl text-primary font-medium"
            variants={textVariants}
          >
            Find Us On S{" "}
            <img src="/images/Icon Logo.png" alt="" className="w-[25px]" />
            cial <span className="text-gray-500"> Media</span>
          </motion.h1>
          <div className="social flex gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=61556900092043&mibextid=ZbWKwL"
              target="blank"
            >
              <img
                src="/images/icons8-facebook (1).svg"
                alt=""
                className="w-[35px]"
              />
            </a>
            <a
              href="https://www.instagram.com/oft_company?igsh=MXB3Z2czNmt3MnF3bA=="
              target="blank"
            >
              <img
                src="/images/icons8-instagram.svg"
                alt=""
                className="w-[35px]"
              />
            </a>
            <a
              href="https://x.com/OFT_company?t=oFAh3931kQNM9ByiMJB_oQ&s=09"
              target="blank"
            >
              <img
                src="/images/icons8-twitterx.svg"
                alt=""
                className="w-[35px]"
              />
            </a>
          </div>
        </motion.div>
      </div>
      <p className="flex items-center justify-center pt-14 md:text-3xl text-sm text-primary border-t-2 border-primary">
        &copy;2024 Own Financial Tactics | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
