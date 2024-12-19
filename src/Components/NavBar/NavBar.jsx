/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = ({ menu }) => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <header className="relative">
      <nav
        className={
          scroll
            ? "flex items-center justify-between gap-7 p-[20px] lg:p-[20px_50px] z-50 border-b border-primary fixed w-screen scrol-nav"
            : "flex items-center justify-between gap-7 p-[20px] lg:p-[20px_50px] z-50 border-b border-primary fixed w-screen"
        }
      >
        <div className="logo w-[100px]">
          <motion.img
            src="/images/OFT ENG.png"
            alt=""
            className="w-full"
            initial={{ y: -200, scale: 0.5 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div
          className="mobile-button block lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <i
            className={
              open
                ? "fa-solid fa-x text-[25px] text-primary"
                : "fa-solid fa-bars text-[25px] text-primary"
            }
          ></i>
        </div>
        <motion.ul
          className="lg:flex hidden gap-5 md:p-[10px_30px] p-[10px_15px] "
          initial={{ y: -300, scale: 1 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {menu.map((item, i) => {
            return (
              <li key={i} className="text-primary font-bold text-[20px]">
                <Link to={item.path}>{item.link}</Link>
              </li>
            );
          })}
        </motion.ul>
        <a
          href="https://api.whatsapp.com/send?phone=963 943 745 050&text=Send20%a20%quote"
          target="blank"
          className=" hover:bg-opacity-0 hover:border border-primary hover:text-primary
          w-[150px] h-[50px] rounded-lg bg-primary lg:flex hidden items-center justify-center gap-2 text-Secondary text-[20px]"
        >
          <span>Talk To Us </span>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <div
          className={` ${
            open ? "-translate-y-0" : "-translate-y-96"
          } transition-all bg-Secondary bg-secondary mobile-nav flex flex-col items-center gap-3 w-full absolute top-24 left-0 p-5  border-b border-primary`}
        >
          <ul className="flex flex-col items-center gap-3">
            {menu.map((item, i) => (
              <li key={i}>
                <Link
                  className="text-[20px] font-medium text-primary"
                  to={item.path}
                  target="blank"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://api.whatsapp.com/send?phone=963 943 745 050&text=Send20%a20%quote"
            target="blank"
            className=" hover:bg-opacity-0 hover:border border-primary hover:text-primary
          w-[150px] h-[50px] rounded-lg bg-primary flex lg:hidden items-center justify-center gap-2 text-Secondary text-[20px]"
          >
            <span>Talk To Us </span>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
