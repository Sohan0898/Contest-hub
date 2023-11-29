import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContestSuggestions = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/contests/search?query=${searchQuery}`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error(error);
      }
    };
    // Fetch suggestions only if there is a searchQuery
    if (searchQuery) {
      fetchContestSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    // Handle the search action and navigate to the contest details page

    console.log(`Search for contests with tags: ${searchQuery}`);
  };

  const handleSuggestionClick = (contest) => {
    // console.log(`navigate to ${contest.name}`);

    navigate(`/contestDetails/${contest._id}`);
  };

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-4" onClick={handleSearch}>
                <span className="text-4xl text-gray-600">
                  <IoSearchOutline />
                </span>
              </button>

              {/* Display suggestions in a dropdown */}
              <div className="z-[1]  ">
                {suggestions.length > 0 && (
                  <ul className=" absolute left-0  right-0 mt-10 bg-white border rounded shadow-md">
                    {suggestions.map((contest) => (
                      <li
                        key={contest._id}
                        className="p-2 text-black cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSuggestionClick(contest)}
                      >
                        {contest.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <h1 className="mb-5 mt-10 leading-tight text-white text-5xl font-semibold">
              Unleash Your Talents in the <br />{" "}
              <span className="text-primary font-bold">Contest Arena</span>
            </h1>
            <p className="mb-5 text-sm text-slate-500">
              Welcome to ContestVerse, where creativity meets competition!{" "}
              <br /> Dive into a universe of diverse challenges spanning
              programming, coding, gaming, <br /> design, and graphic arts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
