/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const NavBar = ({ menu }) => {
  return (
    <header id="nav" className="flex items-center justify-center z-20 ">
      <nav className="flex items-center flex-col gap-7 pt-5 lg:p-[20px_50px]   z-10">
        <div className="logo w-[90px] md:w-[150px]">
          <motion.img
            src="/images/OFT ENG.png"
            alt=""
            className="w-full"
            initial={{ y: -200, scale: 0.5 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.ul
          className="flex gap-5 md:p-[10px_30px] p-[10px_15px] border border-primary rounded-full"
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
