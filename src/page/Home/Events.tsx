import { Link } from "react-router-dom";
import { events } from "../../constants";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <div className="space-y-1  flex flex-col items-center">
        <h2 className="text-black text-xl font-serif font-bold uppercase">
          News & Events
        </h2>
        <span className="flex bg-green h-[3px] w-40"></span>
        <span className="flex bg-green h-[2px] w-20"></span>
      </div>
      <div className="flex gap-6 mt-10 overflow-x-hidden py-4 group relative w-[80%]">
        <button
          type="button"
          className="text-3xl text-white  active:text-white focus:ring-2 bg-green hover:bg-green/90 active:bg-green h-10 w-10 rounded-full flex items-center justify-center duration-300 absolute z-10 top-1/2 left-2"
        >
          <GrFormPrevious />
        </button>
        {events.map((event) => {
          const { img, date, month, path, title, description } = event;
          return (
            <article className="w-80 h-auto relative overflow-hidden bg-white shadow-md">
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
        <button
          type="button"
          className="text-3xl text-white  active:text-white focus:ring-2 bg-green hover:bg-green/90 active:bg-green h-10 w-10 rounded-full flex items-center justify-center duration-300 absolute z-10 top-1/2 right-2"
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Events;
