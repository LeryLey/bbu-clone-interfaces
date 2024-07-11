import Logo from "/src/assets/logo_footer.png";
// icons
import { FaPhoneAlt, FaFacebookF, FaLink } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { gam, downloads, campuses } from "../constants";
const Footer = () => {
  return (
    <div className="bg-[#151515] flex justify-center py-20">
      <div className="w-[80%] flex gap-10">
        <div className="w-[500px] ">
          <img src={Logo} alt="logo" className="w-72 mb-4" />
          <div>
            <p className="text-white">
              Phnom Penh Campus, Corner Street 1003 & 1988 (Building A) and
              Corner Steet 1003 & 1992 (Building B), Sangkat Phnom Penh Thmey,
              Khan Sensok, Phnom Penh
            </p>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              <p className="text-white ">Phone: +855 23 623 4567</p>
            </div>
            <div className="flex items-center gap-2">
              <IoMdTime className="text-white text-4xl " />
              <p className="text-white">
                Office Hours: Mon-Sat:7am-11.30am & 1.30pm-8.30pm,Sun:7am-5pm
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="text-white" />
              <a href="#" className="text-white">
                {" "}
                info@bbu.edu.kh
              </a>
            </div>
            <div className="text-white flex items-center gap-2">
              <IoEarthOutline className="text-white " />
              <a href="#" className="text-white">
                https://bbu.edu.kh
              </a>
            </div>
            <div className=" mt-4 flex gap-3 items-center">
              <a
                href="https://www.facebook.com/bbu.edu.kh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-black border border-white  rounded-full p-2 duration-300 "
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.facebook.com/bbu.edu.kh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-black border border-white  rounded-full p-2 duration-300 "
              >
                <FaLink />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[700px]">
          <h2 className="text-xl text-white">
            The University Governance and Management
          </h2>
          <ul className="mt-4">
            {gam.map((item, index) => (
              <li
                key={index}
                className="text-white list-disc border-b border-blueBlack py-2"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="text-xl text-white">Downloads</h2>
          <ul className="mt-4">
            {downloads.map((item, index) => (
              <li
                key={index}
                className="text-white list-disc border-b border-blueBlack py-2"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-60">
          <h2 className="text-xl text-white">Our Campuses </h2>
          <ul className="mt-4">
            {campuses.map((item, index) => (
              <li key={index} className="text-white list-disc py-2">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
