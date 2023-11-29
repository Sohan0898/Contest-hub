import { Link } from "react-router-dom";

const BestCreatorCard = ({ creator }) => {
  const { name, image, role } = creator;

  return (
    <div className="mx-auto h-full w-full   bg-gray-100  rounded-sm shadow-sm  ">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-44 h-44 mt-7 mb-9 rounded-full shadow-lg"
          src={image}
          alt={name}
        />
        <h5 className=" text-2xl font-semibold uppercase text-gray-900">
          {name}
        </h5>
        <span className="text-sm text-gray-400">Contest Hub {role}</span>
        <div className="flex mt-2 md:mt-3">
          <Link to={"/login"}>
            <span
              href="#"
              className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-500 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
            >
              See My Contest
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestCreatorCard;
