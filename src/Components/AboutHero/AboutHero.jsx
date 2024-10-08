/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const AboutHero = ({ title, subtitle, slogin }) => {
  return (
    <div className="h-screen flex flex-col items-center pt-5">
      <h3 className="">{title}</h3>
      <h1>{subtitle}</h1>
      <p>{slogin}</p>
    </div>
  );
};

export default AboutHero;
