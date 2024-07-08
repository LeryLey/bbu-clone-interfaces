// icons
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import StudyCourse from "/src/assets/course.jpg";
const Course = () => {
  // event onclick close course event
  const [course, setCourse] = useState<boolean>(false);
  const closeEvent = (): void => {
    setCourse(true);
  };

  //set time out event 1mn 2s
  const times: number = 12000;
  setTimeout(() => {
    setCourse(true);
  }, times);

  // countdown time out event 1mn 2s
  const [countdown, setCountdown] = useState<number>(12);
  useEffect(() => {
    let interval: number = 0;
    if (countdown >= 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div>
      <div
        className={
          !course
            ? "fixed flex items-center justify-center top-0 left-0 w-full h-screen py-10 bg-black/65 overflow-auto z-20 "
            : "hidden"
        }
      >
        <div className="w-[650px] h-full ">
          <Link to={"/course"}>
            <div className="bg-secondary py-4 flex items-center justify-center relative">
              <h2 className="text-white uppercase font-medium text-xl font-serif">
                Up coming event
              </h2>
              <button
                type="button"
                onClick={closeEvent}
                className="text-white text-3xl absolute right-4 "
              >
                <IoClose />
              </button>
            </div>
            <div>
              <img src={StudyCourse} alt="course" className="w-full" />
            </div>
            <div className="bg-secondary p-3 text-center relative">
              <p className="text-white text-xl font-serif">
                វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ១០%
                សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់
              </p>
            </div>
          </Link>
          <p className="text-green text-center pt-4 pb-10">
            Ads will diaspore at: {countdown}s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;
