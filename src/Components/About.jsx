import rezwan from "../assets/jubaer.jpg";
import { motion } from "framer-motion";
import "./Css/About.css";
import "../App.css";
import cv from "../assets/cv.pdf";
import { Link } from "react-router-dom";
import { FaDownload, FaFacebookF } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  const [text] = useTypewriter({
    words: ["Computer Engineer", "MeachineLearning Expert"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40,
  });
  return (
    <div className=" rounded-md py-8" id="about">
      <div className="hero-content  gap-3 flex-col-reverse md:flex-row">
        <div className=" flex-1 space-y-2  text-center md:text-start p-8">
          <motion.h1
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className=" text-3xl md:text-5xl font-bold"
          >
            Hi , i'm <span className=" text-rose-700">Jubaer Hossain</span>
          </motion.h1>
          <motion.h3
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className=" text-2xl md:text-4xl"
          >
            I am a <span className="text-rose-400 font-bold"> {text}</span>
            <Cursor />
          </motion.h3>
          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
          >
            I have a strong background in web development and programming, with hands-on experience in HTML, CSS, Python, C, C++, and modern front-end technologies like React.js. In addition to core development skills, I have a growing interest and practical experience in Machine Learning, Data Mining, and Image Processing. As a third-year Computer Science and Engineering student, I'm passionate about continuous learning and always eager to explore emerging technologies. I thrive in collaborative environments and consistently deliver projects on time, with a focus on both functionality and quality.
          </motion.p>
          <motion.div
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className=" flex gap-2 my-10 text-3xl"
          >
            <Link to="https://www.facebook.com/s.m.jubaer.hossain.2024">
              <FaFacebookF className=" contact-icon text-[#1877F2]" />
            </Link>
            <Link to="https://www.linkedin.com/in/md-jubaer-hossain-3984b627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <GrLinkedin className="contact-icon text-[#0077B5]" />
            </Link>

          </motion.div>
          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className=" my-5 flex gap-3"
          >
            <a
              download=""
              href={cv}
              className="btn   text-xl font-semibold btn-secondary bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            >
              Download Resume <FaDownload />
            </a>
            {/* <Link
              to="/contact"
              className=" btn  text-xl font-semibold  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            >
              Contact me
            </Link> */}
          </motion.div>
        </div>
        <div className=" flex-1 ">
          <div className=" flex justify-center items-center">
            <img
              className="img"
              // className=" img w-[250px] h-[250px] border-2 rounded-full hover:shadow-2xl"
              src={rezwan}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
