import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="mt-10" id="edu">
      <h1 className="text-4xl md:text-5xl text-center my-3 font-bold">
        Education
      </h1>
      <VerticalTimeline lineColor="white" className="text-black">
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="2022 - stady"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "white" }}
          icon={<FaGraduationCap />}
        >
          <div>
            <h3 className=" text-2xl font-bold">Bachelor of Science</h3>
            <h4 className="">Computer Science and Engineering </h4>
            <p>
              <b>Result in CGPA-3.86</b>
              <br />I am currently studying  Fourth year at North Western
              University.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBuildingColumns />}
        >
          <h3 className=" text-2xl font-bold">Higher Secondary</h3>
          <h4 className="vertical-timeline-element-subtitle">
            From the science group
          </h4>
          <p>
            <b>Result in GPA-A-</b>
            <br /> I passed HSC exam Begum Khalada Zia Degree College in 2018 and 2019
            academic year.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            Secondary
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            From the science group
          </h4>
          <p>
            {" "}
            <b>Result in GPA-A</b>
            <br />I have been studying at Chingra Darsunna Alim Madrasah since 2012 and
            passed the Dakhil Examination for the academic year 2016-2017
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
