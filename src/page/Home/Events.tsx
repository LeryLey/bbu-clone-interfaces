import { Link } from "react-router-dom";
import { events } from "../../constants";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Events = () => {
  const scroll: number = 300;
  const slideLeft = (): void => {
    const slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft - scroll;
  };
  const slideRight = (): void => {
    const slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft + scroll;
  };
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
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
    </div>
  );
};

export default Events;
