import  { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Link, useLoaderData } from 'react-router-dom';

const ContestDetails = () => {
  const { _id, name, image, tag, task, date, description } = useLoaderData();
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
      const duration = endDate.diff(now, 'second');

      if (duration > 0) {
        const days = Math.floor(duration / (24 * 3600));
        const hours = Math.floor((duration % (24 * 3600)) / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = Math.floor(duration % 60);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    // Calculate the initial countdown
    calculateCountdown();

    // Set up an interval to update the countdown every second
    const intervalId = setInterval(calculateCountdown, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [date]);

    return (
    <div>
      <section className="py-10 bg-gray-800 lg:py-0">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="h-full pr-12  lg:order-2 lg:mb-40">
              <div className="relative h-full lg:h-auto">
                <div className="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-28 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                  <img
                    className="object-cover object-right w-full h-full scale-150"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg"
                    alt=""
                  />
                </div>
                <div className="relative lg:-top-12">
                  <img className="" src={image} alt="" />
                </div>
              </div>
            </div>

            <div className=" py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
            <p className="text-sm py-7 font-semibold tracking-widest text-gray-500 uppercase">
                 {tag}
                </p>
            <div className=" flex">
                
                <div><h1 className='text-4xl uppercase  text-white'>
                    Contest Deadline</h1></div>
                <div className="grid grid-flow-col gap-5 text-white text-center auto-cols-max">
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-6xl">{countdown.days}</span>
                    days
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-6xl">{countdown.hours}</span>
                    hours
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-6xl">{countdown.minutes}</span>
                    min
                  </div>
                  <div className="flex flex-col">
                    <span className="countdown font-mono text-6xl">{countdown.seconds}</span>
                    sec
                  </div>
                </div>
              </div>

              <div>
                
                <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  {name}
                </h2>
                <p className="text-xl leading-relaxed text-gray-200 mt-9">
                  {description}
                </p>
                <p className="mt-6 text-xl leading-relaxed text-gray-200">
                  {task}
                </p>
                <Link to ={`/paymentToRegister/${_id}`}><span
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  {" "}
                  Register Contest{" "}
                </span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContestDetails;
