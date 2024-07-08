import { Link } from "react-router-dom";
import { headerLinks } from "../constants";
import KhmerFlag from "/src/assets/khmer-flag.jpg";
import EnglishFlag from "/src/assets/english-flag.jpg";
import Logo from "/src/assets/logo.png";
const HeaderTop = () => {
  return (
    <header >
      <div className="flex justify-center items-center py-1 bg-whiteGray">
        <div>
          {headerLinks.map((link) => (
            <Link
              to={link.path}
              className="border-r border-primary text-primary font-normal text-sm pr-3 pl-1 "
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="ml-4 flex gap-3">
          <button className="flex items-center gap-1">
            <img src={EnglishFlag} alt="english" className="w-5 " />
            <p className="text-primary text-sm font-normal">English</p>
          </button>
          <button className="flex items-center gap-1">
            <img src={KhmerFlag} alt="khmer" className="w-5 " />
            <p className="text-primary text-sm font-normal">Khmer</p>
          </button>
        </div>
      </div>
      <div className="bg-school bg-cover w-full h-52 b ">
        <div className="w-full h-full flex items-center  bg-white/50">
          <img src={Logo} alt="logo" className="w-[500px] h-32 translate-x-60" />
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
