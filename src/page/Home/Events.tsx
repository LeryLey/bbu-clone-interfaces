import { Link } from "react-router-dom";
import { events } from "../../constants";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaVideo } from "react-icons/fa";
import { educations } from "../../constants";
import { useEffect } from "react";
// img
import Chairman from "/src/assets/Chairman.jpg";
import President from "/src/assets/President.jpg";
import Advisor from "/src/assets/advisor.png";
import VicePresident from "/src/assets/vice-president.png";
import AppStore from "/src/assets/app_ios.png";
import PlayStore from "/src/assets/app-and.png";
import Research from "/src/assets/research.jpg";

const Events = () => {
  // auto slide
  const time: number = 5000;
  const autoSlide = setInterval((): void => {
    slideRight();
  }, time);
  // call function auto slide
  useEffect(() => {
    autoSlide;
    return () => clearInterval(autoSlide);
  }, []);
  // stop auto slide
  const stopAutoSlide = () => {
    clearInterval(autoSlide);
  };

  const scroll: number = 300;
  const slideLeft = (): void => {
    const slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft - scroll;
    stopAutoSlide();
  };
  const slideRight = (): void => {
    const slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft + scroll;
    stopAutoSlide();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-[#F7F8FA]">
      <div className="space-y-1  flex flex-col items-center">
        <h2 className="text-black text-xl font-serif font-bold uppercase">
          News & Events
        </h2>
        <span className="flex bg-green h-[3px] w-40"></span>
        <span className="flex bg-green h-[2px] w-20"></span>
      </div>
      <div className="flex items-center justify-center w-[80%] gap-2">
        <button
          type="button"
          onClick={slideLeft}
          className="  text-3xl  text-white  active:text-white focus:ring-2 bg-green hover:bg-green/90 active:bg-green h-10 w-10 rounded-full flex items-center justify-center duration-300  z-10 "
        >
          <GrFormPrevious />
        </button>
        <div
          id="slider"
          className="relative mt-10 overflow-x-hidden scroll scroll-smooth whitespace-nowrap py-4 group w-[80%] "
        >
          {events.map((event) => {
            const { img, date, month, path, title, description } = event;
            return (
              <article className="w-72 h-auto relative inline-block overflow-hidden bg-white shadow-md mr-5">
                <div className="absolute bg-blueBlack flex flex-col w-10 h-14 items-center">
                  <p className="text-white">{date}</p>
                  <p className="text-white uppercase">{month}</p>
                </div>
                <div>
                  <img src={img} />
                </div>
                <div className="block p-4 ">
                  <div className="overflow-hidden space-y-2 ">
                    <h2 className="text-lg text-black font-bold w-[700px] ">
                      {title}
                    </h2>
                    <p className="text-gray text-base">{description}</p>
                    <Link to={path}>
                      <button
                        type="button"
                        className="text-sm bg-green text-white px-3 py-1 rounded mt-3"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <button
          type="button"
          onClick={slideRight}
          className=" text-3xl text-white  active:text-white focus:ring-2 bg-green hover:bg-green/90 active:bg-green h-10 w-10 rounded-full flex items-center justify-center duration-300 z-10 "
        >
          <GrFormNext />
        </button>
      </div>
      <div className="w-full bg-white flex items-center justify-center py-4">
        <div className="w-[80%] space-y-5">
          <div className=" grid grid-cols-3">
            {/* message  */}
            <div className="space-y-10 ">
              <div>
                <h1 className="text-green text-xl mb-5 font-medium">Message</h1>
                <article className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full object-cover border border-gray overflow-hidden ">
                    <img src={Chairman} className="w-full h-full" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-black text-base font-serif ">
                      Chairman
                    </h2>
                    <p className="text-gray text-sm font-serif">
                      H.E. Dr. In Viracheat
                    </p>
                  </div>
                </article>
              </div>
              <div>
                <article className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full object-cover border border-gray overflow-hidden ">
                    <img src={President} className="w-full h-full" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-black text-base font-serif ">
                      President
                    </h2>
                    <p className="text-gray text-sm font-serif">
                      Assoc. Prof. Diep Seiha
                    </p>
                  </div>
                </article>
              </div>
            </div>
            {/* governance  */}
            <div className="space-y-10">
              <div>
                <h1 className="text-green text-xl mb-5 font-medium ">
                  Governance Students
                </h1>
                <article className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full object-cover border border-gray overflow-hidden ">
                    <img src={Advisor} className="w-full h-full" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-black text-base font-serif font-bold">
                      University's Advisor
                    </h2>
                    <p className="text-gray text-sm font-serif"></p>
                  </div>
                </article>
              </div>
              <div>
                <article className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full object-cover border border-gray overflow-hidden ">
                    <img src={VicePresident} className="w-full h-full" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-black text-base font-serif font-bold">
                      Vice President
                    </h2>
                    <p className="text-gray text-sm font-serif"></p>
                  </div>
                </article>
              </div>
            </div>
            {/* download app  */}
            <div className="space-y-10">
              <div>
                <h1 className="text-green text-xl mb-5 font-medium ">
                  Download BBU App
                </h1>
                <div className="flex gap-4">
                  <Link to={"/app-store"}>
                    <img src={AppStore} className="w-32" />
                  </Link>
                  <Link to={"/play-store"}>
                    <img src={PlayStore} className="w-32" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-full bg-whiteGray h-40 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F8FA] w-full flex justify-center items-center py-5">
        <div className="w-[80%] ">
          <div className="grid grid-cols-2 gap-10">
            <div className="h-full ">
              <div className="mb-10">
                <h2 className="text-2xl text-black">
                  Library & Learning Resources
                </h2>
                <span className="w-20 h-px bg-black flex"></span>
              </div>
              <div>
                <div className="space-y-4 bg-white w-full">
                  <article className="flex gap-10 items-center">
                    <img src={Research} alt="research" className="w-40" />
                    <div>
                      <h3 className="text-black text-base font-bold font-serif">
                        Research Activities
                      </h3>
                      <p className="text-xl text-gray">...</p>
                    </div>
                  </article>
                  <article className="flex gap-10 items-center">
                    <img src={Research} alt="research" className="w-40" />
                    <div>
                      <h3 className="text-black text-base font-bold font-serif">
                        Research Activities
                      </h3>
                      <p className="text-xl text-gray">...</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h2 className="text-2xl text-black flex items-center gap-2">
                  <FaVideo />
                  Videos
                </h2>
                <span className="w-20 h-px bg-black flex"></span>
              </div>
              <div className="w-full h-40 bg-white flex items-center justify-center ">
                No Video
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-10 justify-center w-full ">
            {educations.map((education, index) => {
              return (
                <div
                  key={index}
                  className="group mb-4 bg-white hover:bg-blueBlack border border-green flex items-center flex-col justify-center py-4 px-8 duration-300"
                >
                  <span className="text-7xl text-gray group-hover:text-white duration-300">
                    {education.icon}
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-gray group-hover:text-white flex items-center gap-2 duration-300">
                    {education.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
