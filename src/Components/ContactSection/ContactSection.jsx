import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
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
const textVariants2 = {
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
const ContactSection = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    toast("Sending...", {
      style: {
        background: "#3C4048",
        color: "#1ABA9",
      },
    });
    const formData = new FormData(event.target);

    formData.append("access_key", "fe09a96c-130c-48d4-ac2d-2c7d4bc36361");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.message);
      toast.success(result, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error(result, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <section className="p-[50px_15px] lg:p-[70px_60px] flex lg:flex-row flex-col gap-5 justify-between overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="contact-form lg:w-[45%] w-full"
      >
        <h2 className="text-[25px] lg:text-[40px] font-bold text-primary">
          Send Us a Message
        </h2>
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="name flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-500 text-[20px]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
              className="h-[50px] rounded-lg pl-3 outline-none border border-primary text-white"
              style={{
                background: "none",
              }}
            />
          </div>
          <div className="email flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-500 text-[20px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              className="h-[50px] rounded-lg pl-3 outline-none border border-primary text-white"
              style={{
                background: "none",
              }}
            />
          </div>
          <div className="message flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-500 text-[20px]">
              Message
            </label>
            <textarea
              id="message"
              placeholder="message"
              required
              className="h-[150px] rounded-lg pl-3 pt-3 outline-none border border-primary text-white"
              style={{
                background: "none",
              }}
            ></textarea>
          </div>
          <div className="submit flex items-center justify-center">
            <button
              className=" transition-all
            bg-Secondary text-primary w-full h-[50px] lg:text-[25px] rounded-md hover:bg-opacity-0 hover:border border-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={textVariants2}
        initial="initial"
        whileInView="animate"
        className="stay-in-touch flex flex-col gap-10 lg:w-[45%] w-full"
      >
        <h2 className="text-[25px] lg:text-[40px] font-bold text-primary">
          Stay In Touch
        </h2>
        <div className="email flex items-center gap-2">
          <i className="fa-solid fa-envelope text-primary text-[20px] lg:text-[30px]"></i>
          <Link
            to="mailto:Info@ownfinancialtactics.com"
            className="text-gray-500 text-[20px] lg:text-[30px]"
          >
            Info@ownfinancialtactics.com
          </Link>
        </div>
        <div className="phone flex items-center gap-2">
          <i className="fa-solid fa-phone text-primary text-[20px] lg:text-[30px]"></i>
          <Link
            to="https://api.whatsapp.com/send?phone=963 943 745 050&text=Send20%a20%quote"
            className="text-gray-500 text-[20px] lg:text-[30px]"
          >
            +963 943 745 050
          </Link>
        </div>
        <div className="location flex items-center gap-2">
          <i className="fa-solid fa-location-dot text-primary text-[20px] lg:text-[30px]"></i>
          <span className="text-gray-500 text-[20px] lg:text-[30px]">
            Damascus-Syria
          </span>
        </div>
        <p className="p-5 text-primary text-lg max-w-full bg-Secondary rounded-lg">
          We're here for you. Reach out with any questions, feedback, or support
          needs. Let's make great things happen together!
        </p>
      </motion.div>
      <ToastContainer />
    </section>
  );
};

export default ContactSection;
