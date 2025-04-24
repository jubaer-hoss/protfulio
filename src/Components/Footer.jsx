import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import "../App.css";
const Footer = () => {
  return (
    <div className=" mt-10 bg-black/55 p-8">
      <div className=" flex gap-5 my-10 justify-center text-3xl">
        <Link to="https://www.facebook.com/s.m.jubaer.hossain.2024">
          <FaFacebookF className=" contact-icon text-[#1877F2]" />
        </Link>
        <Link to="https://www.linkedin.com/in/md-jubaer-hossain-3984b627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <GrLinkedin className="contact-icon text-[#0077B5]" />
        </Link>

      </div>
      <p className=" text-center">
        Copyright © ${new Date().getFullYear()} - All right reserved by{" "}
        <span className=" text-rose-400">Jubaer Hossain. @2025</span>
      </p>
    </div>
  );
};

export default Footer;
