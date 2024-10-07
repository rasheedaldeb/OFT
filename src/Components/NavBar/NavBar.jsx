/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = ({ menu }) => {
  const [scroll, setscroll] = useState(false);
  const changBgColor = () => {
    if (window.scrollY >= 60) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  window.addEventListener("scroll", changBgColor);
  return (
    <header
      id="nav"
      className={
        scroll
          ? "flex items-center justify-center z-20  backdrop-blur-lg shadow-[0_0_5px_0 rgba(0, 0, 0, 0.583)] transition-all"
          : "flex items-center justify-center z-20 "
      }
    >
      <nav className="flex items-center flex-col gap-7 pt-5 lg:p-[20px_50px]   z-10">
        <div className="logo w-[90px] md:w-[150px]">
          <motion.img
            src="/public/images/OFT ENG.png"
            alt=""
            className="w-full"
            initial={{ y: -200, scale: 0.5 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.ul
          className="flex gap-5 p-[10px_30px] border border-primary rounded-full"
          initial={{ y: -300, scale: 1 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {menu.map((item, i) => {
            return (
              <li key={i} className="text-primary font-bold">
                <Link to={item.path}>{item.link}</Link>
              </li>
            );
          })}
        </motion.ul>
      </nav>
    </header>
  );
};

export default NavBar;
