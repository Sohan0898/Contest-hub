import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ContestDetails = () => {
  const { _id, name, image, tag, task, date, description, prize, price } =
    useLoaderData();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = dayjs();
      const endDate = dayjs(date);
      const duration = endDate.diff(now, "second");

      if (duration > 0) {
        const days = Math.floor(duration / (24 * 3600));
        const hours = Math.floor((duration % (24 * 3600)) / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = Math.floor(duration % 60);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    calculateCountdown();

    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div>
      <Helmet>
        <title>Contest Hub | Contest Details </title>
      </Helmet>
      <section className="py-10  lg:py-20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 ">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="h-full text-black pr-12 lg:order-2 lg:mb-10">
              <div className="relative md:mt-20 h-full lg:h-auto">
                <div className="absolute w-full h-full overflow-hidden left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                  <img
                    className="object-cover rounded-md shadow opacity-80 object-right w-[600px] h-[480px] scale-150"
                    src="https://i.ibb.co/c13P2Br/yyuu14.jpg"
                    alt=""
                  />
                </div>
                <div className="relative lg:-top-12">
                  <img
                    className="w-full rounded-md shadow-md shadow-black md:h-[420px]"
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="   py-10 lg:order-1 sm:py-16 lg:py-2 ">
              <p className="text-sm  text-secondary font-semibold tracking-widest  uppercase">
                {tag}
              </p>
              <div className="mt-2">
                <div className="grid text-red-400 grid-flow-col gap-5  text-center auto-cols-max">
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-6xl font-semibold">
                      {countdown.days}
                    </span>
                    days
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-6xl font-semibold">
                      {countdown.hours}
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-6xl font-semibold">
                      {countdown.minutes}
                    </span>
                    min
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-6xl font-semibold">
                      {countdown.seconds}
                    </span>
                    sec
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown text-red-400 text-md  font-bold">
                      {" "}
                      Remaining
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                  {name}
                </h2>
                <p className="text-xl font-semibold text-gray-800  leading-relaxed  mt-2">
                  {description}
                </p>
                <p className=" text-lg text-gray-500 font-medium  leading-relaxed mt-1 ">
                  Task : {task}
                </p>
                <p className=" text-lg text-gray-500 font-medium  leading-relaxed mt-1 ">
                  Price : {price} $
                </p>
                <p className=" text-lg text-gray-500 font-medium  leading-relaxed mt-1 ">
                  Prize Money: {prize} $
                </p>
                <Link to={`/paymentToRegister/${_id}`}>
                  <span
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                    role="button"
                  >
                    {" "}
                    Register Contest{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContestDetails;
