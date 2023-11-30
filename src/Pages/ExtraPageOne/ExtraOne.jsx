import { Helmet } from "react-helmet-async";

const ExtraOne = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-blue-500">
        <Helmet>
        <title>Contest Hub | Participate Progress </title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Participation Progress Tracking</h1>

        {/* Progress Bar */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Contest Progress</h2>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  In Progress
                </span>
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  70%
                </span>
              </div>
            </div>
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  Completed
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  30%
                </span>
              </div>
            </div>
            <div className="flex mb-5 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  Total
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  100%
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="flex-grow overflow-hidden h-2  mb-4 text-xs flex rounded bg-teal-200">
                <div
                  style={{ width: '70%' }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                ></div>
                <div
                  style={{ width: '30%' }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones Table */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Milestones</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Milestone</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Task 1</td>
                <td className="border px-4 py-2">Completed</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Task 2</td>
                <td className="border px-4 py-2">In Progress</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Task 3</td>
                <td className="border px-4 py-2">Not Started</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Information */}
        <div>
          <p className="text-gray-600">
            Track our progress in the contest and stay motivated. Youre doing great! Keep up the excellent work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraOne;
