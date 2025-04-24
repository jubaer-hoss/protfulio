import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased selection:bg-blue-200 selection:text-blue-600">
  <div className="inset-0 h-screen -z-20 fixed w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#a18cd1_40%,#fbc2eb_100%)]"></div>

  <Navbar />
  <Outlet />
  <Footer />
</div>



  );
};

export default Root;
