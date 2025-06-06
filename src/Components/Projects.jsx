import img1 from "../assets/hostel.png";
import img3 from "../assets/blog.png";
import img2 from "../assets/votting.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const project = [
  {
    id: 1,
    title: "Hostel Management system ",
    des: "A Hostel Management System for a university is a software application designed to streamline and automate the various administrative tasks associated with managing student accommodations.",
    img: img1,
    View: "https://sms-clint.web.app/",
    codeview: "https://github.com/rezwanhossen/sms-clint",
    tecnolo: [
      "Python", "mySql", "HTML"
    ],
  },
  {
    id: 2,
    title: "Voting machine",
    des: "A secure and user-friendly digital voting system designed to ensure transparency, accuracy, and efficiency in the election process.",
    img: img2,
    view: "https://doctoe-servics.web.app/",
    codeview: "https://github.com/rezwanhossen/doctor-servic-",
    tecnolo: [
      "php", "python", "mysql"
    ],
  },
  {
    id: 3,
    title: "Blog Post",
    des: "Expert care meets compassion—personalized treatments and innovative solutions for your health and well-being.",
    img: img3,
    view: "https://turesom-assigment10.web.app/",
    codeview: "https://github.com/rezwanhossen/-Travel-Tour-clint",
    tecnolo: ["Python", "django", "DB browser"],
  },
];
const Projects = () => {
  return (
    <div className=" mt-10" id="project">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-5">
        Projects{" "}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {project.map((pro) => (
          <div key={pro.id}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className=" space-y-2 border-2 rounded-lg p-5"
            >
              <div className="">
                <img className=" w-full h-[200px]" src={pro?.img} alt="" />
                {/* <div className="absolute top-1 inset-0 flex justify-center items-center"> */}
                {/* <div className="flex justify-center items-center gap-5 text-3xl">
                  <Link
                    to={pro?.codeview}
                    className="icon tooltip "
                    data-tip="Code in github"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={pro?.view}
                    className="icon tooltip "
                    data-tip="View Project"
                  >
                    <FaRegEye />
                  </Link>
                </div> */}
                {/* </div> */}
              </div>

              <h2 className="text-2xl font-bold">{pro?.title}</h2>
              <p>{pro.des.slice(0, 100)}...</p>
              <div className="grid grid-cols-3 gap-2 ">
                {pro.tecnolo.map((tec, inx) => (
                  <p
                    key={inx}
                    className=" bg-slate-600 text-[14px] text-center  rounded-md"
                  >
                    {tec}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
