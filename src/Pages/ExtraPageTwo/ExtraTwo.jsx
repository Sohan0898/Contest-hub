import { Helmet } from "react-helmet-async";


const ExtraTwo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-secondary to-primary">
        <Helmet>
        <title>Contest Hub | Raodmap </title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Contest Roadmap</h1>

        {/* Timeline */}
        <div className="relative">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-purple-500 text-white rounded-full px-4 py-6 mr-3">1</div>
              <div>
                <h2 className="text-lg font-semibold">Contest Kickoff</h2>
                <p className="text-sm text-gray-600">The contest begins on January 1, 2024.</p>
              </div>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-purple-500 text-white rounded-full px-4 py-6 mr-3">2</div>
              <div>
                <h2 className="text-lg font-semibold">Submission Deadline</h2>
                <p className="text-sm text-gray-600">Submit your entries by February 1, 2024.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-500 text-white rounded-full px-4 py-6 mr-3 ">3</div>
              <div>
                <h2 className="text-lg font-semibold">Winner Announcement</h2>
                <p className="text-sm text-gray-600">Discover the winners on February 15, 2024.</p>
              </div>
            </div>
          </div>
        </div>

{/* Additional Information */}
<div className="mt-8">
          <p className="text-gray-600">
            Join us on this exciting journey! Participate in our contests and showcase your skills. We look forward to seeing your creativity shine.
          </p>
        </div>


        {/* Additional Details */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Additional Details</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Event</th>
                <th className="px-4 py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">January 1, 2024</td>
                <td className="border px-4 py-2">Contest Launch Ceremony</td>
                <td className="border px-4 py-2">Online - ContestHub Platform</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">February 1, 2024</td>
                <td className="border px-4 py-2">Submission Deadline</td>
                <td className="border px-4 py-2">Online - ContestHub Platform</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">February 15, 2024</td>
                <td className="border px-4 py-2">Winner Announcement Live Event</td>
                <td className="border px-4 py-2">Online - ContestHub Platform</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExtraTwo;
