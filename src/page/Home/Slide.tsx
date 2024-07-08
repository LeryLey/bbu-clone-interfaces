import { slides } from "../../constants";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // previous slide
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  // next slide
  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
      <div className="relative w-full h-[500px] group ">
        {/* btn prev  */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-2 text-2xl text-white bg-black/30 active:bg-black/30 hover:bg-black/10 flex items-center justify-center focus:ring-2 rounded-full w-12 h-12  opacity-0 group-hover:opacity-100 duration-300 "
        >
          <GrFormPrevious />
        </button>

        {/* slide show  */}
        <div
          className={`w-full h-full bg-cover duration-500`}
          style={{ background: `url(${slides[currentIndex].img})` }}
        ></div>

        {/* btn next  */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-2 text-2xl text-white bg-black/30 active:bg-black/30 hover:bg-black/10 flex items-center justify-center  focus:ring-2 rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 duration-300 "
        >
          <GrFormNext />
        </button>
      </div>
    </>
  );
};

export default Slide;
