// icons
import { IoChevronDown, IoClose } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
// constants
import { campusesDropdown } from "../constants";
import { about } from "../constants";
import { academics } from "../constants";
import { admissions } from "../constants";
import { researchAndPublication } from "../constants";
import { studentServices } from "../constants";
// components
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [search, setSearch] = useState(false);
  const handleSearchToggle = () => {
    setSearch(!search);
  };
  return (
    <nav className="bg-primary flex justify-center  w-full ">
      <ul className="flex relative w-[80%]">
        <li className="cursor-pointer text-white flex items-center font-serif text-sm p-6 hover:bg-green duration-300">
          Home
        </li>
        <li className="group cursor-pointer text-white flex items-center font-serif text-sm p-6 hover:bg-green duration-300">
          <a className="flex items-center">
            Campuses
            <IoChevronDown className="text-base" />
          </a>
          <ul className="dropdown group-hover:h-[840px]">
            {campusesDropdown.map((campuses) => {
              return (
                <li className="cursor-pointer text-white text-sm m-8">
                  <Link to={campuses.path}>
                    <h2 className="text-primary font-bold text-base mb-4">
                      {campuses.title}
                    </h2>
                    <div className="w-60 overflow-hidden">
                      <img
                        src={campuses.img}
                        alt="img"
                        className="w-full h-full hover:scale-[1.1] duration-300"
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="group cursor-pointer text-white flex items-center font-serif text-sm  p-6 hover:bg-green duration-300 relative">
          <a className="flex items-center">
            About BBU
            <IoChevronDown className="text-base" />
          </a>
          <ul className="absolute left-0 top-full bg-white rounded-b-md shadow-xl  overflow-hidden h-0 group-hover:h-[440px] w-72 duration-500">
            {about.map((about) => {
              return (
                <li className="cursor-pointer w-full hover:bg-green text-gray hover:text-white py-3 px-4 hover:pl-6 flex items-center duration-300">
                  <Link
                    to={about.path}
                    className="flex items-center justify-between w-full"
                  >
                    <h2 className="text-xs">{about.title}</h2>
                    <p>{about.icon}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="group cursor-pointer text-white flex items-center font-serif text-sm  p-6 hover:bg-green duration-300 relative">
          <a className="flex items-center">
            Academics
            <IoChevronDown className="text-base" />
          </a>
          <ul className="absolute left-0 top-full bg-white rounded-b-md shadow-xl  overflow-hidden h-0 group-hover:h-[360px] w-80 duration-500">
            {academics.map((academic) => {
              return (
                <li className="cursor-pointer w-full hover:bg-green text-gray hover:text-white py-3 px-4 hover:pl-6 flex items-center duration-300">
                  <Link
                    to={academic.path}
                    className="flex items-center justify-between w-full"
                  >
                    <h2 className="text-xs">{academic.title}</h2>
                    <p>{academic.icon}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="group cursor-pointer text-white flex items-center font-serif text-sm  p-6 hover:bg-green duration-300 relative">
          <a className="flex items-center">
            Admission
            <IoChevronDown className="text-base" />
          </a>
          <ul className="absolute left-0 top-full bg-white rounded-b-md shadow-xl  overflow-hidden h-0 group-hover:h-[160px] w-60 duration-500">
            {admissions.map((admission) => {
              return (
                <li className="cursor-pointer w-full hover:bg-green text-gray hover:text-white py-3 px-4 hover:pl-6 flex items-center duration-300">
                  <Link
                    to={admission.path}
                    className="flex items-center justify-between w-full"
                  >
                    <h2 className="text-xs">{admission.title}</h2>
                    <p>{admission.icon}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="group cursor-pointer text-white flex items-center font-serif text-sm  p-6 hover:bg-green duration-300 relative">
          <a className="flex items-center">
            Research & Publication
            <IoChevronDown className="text-base" />
          </a>
          <ul className="absolute left-0 top-full bg-white rounded-b-md shadow-xl  overflow-hidden h-0 group-hover:h-[170px] w-96 duration-500">
            {researchAndPublication.map((research) => {
              return (
                <li className="cursor-pointer w-full hover:bg-green text-gray hover:text-white py-3 px-4 hover:pl-6 flex items-center duration-300">
                  <Link
                    to={research.path}
                    className="flex items-center justify-between w-full"
                  >
                    <h2 className="text-xs">{research.title}</h2>
                    <p>{research.icon}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="group cursor-pointer text-white flex items-center font-serif text-sm  p-6 hover:bg-green duration-300 relative">
          <a className="flex items-center">
            Student Services
            <IoChevronDown className="text-base" />
          </a>
          <ul className="absolute left-0 top-full bg-white rounded-b-md shadow-xl  overflow-hidden h-0 group-hover:h-[360px] w-60 duration-500">
            {studentServices.map((service) => {
              return (
                <li className="cursor-pointer w-full hover:bg-green text-gray hover:text-white py-3 px-4 hover:pl-6 flex items-center duration-300">
                  <Link
                    to={service.path}
                    className="flex items-center justify-between w-full"
                  >
                    <h2 className="text-xs">{service.title}</h2>
                    <p>{service.icon}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
      {/* search  */}
      <div className="py-6">
        <button
          onClick={handleSearchToggle}
          className="text-gray hover:text-white duration-300 text-2xl font-medium"
        >
          <GoSearch />
        </button>
        <div
          className={
            !search
              ? "absolute top-0 bg-black/95  w-full h-0 left-0 flex items-center justify-center overflow-hidden duration-500 ease-out"
              : "absolute top-0 bg-black/95  w-full h-full left-0 flex items-center justify-center overflow-hidden duration-500 ease-out"
          }
        >
          <button
          onClick={handleSearchToggle}
            type="button"
            className="text-gray hover:text-white text-3xl absolute top-3 right-3 "
          >
            <IoClose />
          </button>
          <div className="relative w-96">
            <input
              type="search"
              placeholder="Search Keyword(s)"
              className="bg-transparent border-b-2 border-gray focus:border-secondary w-full text-3xl outline-none text-gray pr-10 pb-1"
            />
            <button className="text-gray hover:text-white duration-300 ml-2 absolute right-1 top-1 text-3xl">
              <GoSearch />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
