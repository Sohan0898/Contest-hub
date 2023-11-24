import { IoSearchOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/vdvRfN2/Untitled-design-6.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-gradient-to-b from-third to-[#12121200]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl px-4 -mt-8 lg:px-0">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search Your Contest...."
                className="input py-8 input-bordered border-secondary hover:ring-1 text-black  hover:ring-secondary outline-1 outline-white  w-full lg:w-[800px]"
              />
              <button className="absolute  right-4">
                <span className="text-4xl text-gray-600">
                  <IoSearchOutline />
                </span>
              </button>
            </div>
            <h1 className="mb-5 mt-10 leading-tight text-white  text-5xl font-semibold">
              Unleash Your Talents in the <br />{" "}
              <span className="text-primary font-bold">Contest Arena</span>
            </h1>
            <p className="mb-5 text-sm text-slate-500">
              Welcome to ContestVerse, where creativity meets competition!{" "}
              <br /> Dive into a universe of diverse challenges spanning
              programming,coding, gaming, <br /> design, and graphic arts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
