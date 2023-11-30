import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useImgbbApi from "../../../../Hooks/useImgbbApi";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { WinPercentage } from "./WinPercentage";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const imgbbApi = useImgbbApi();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const handleUpdate = async (data) => {
    try {
      const imageFile = { image: data?.image[0] };
      const res = await axiosPublic.post(imgbbApi, imageFile, {
        headers: { "content-type": "multipart/form-data" },
      });

      const imageUrl = res?.data?.data?.display_url;
      await updateUserProfile(data?.name, imageUrl);

      const matchingUser = users.find(
        (userData) => userData.email === user.email
      );

      if (matchingUser) {
        const userInfo = { name: data.name, image: imageUrl };
        await axiosSecure.patch(`/users/${matchingUser._id}`, userInfo);

        reset();
        toast.success(`Profile has been updated`);
        refetch();

        const modal = document.getElementById("update_info");
        if (modal) modal.close();
      } else {
        toast.error("User not found in loaded data");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex justify-center gap-10 items-center px-1 py-5 my-8">
      {/* Show win percentage */}
      <Helmet>
        <title>Contest Hub | Dashboard| My Profile </title>
      </Helmet>
      <div className="w-3/6">
        <WinPercentage></WinPercentage>
      </div>
      {/* profile */}
      <div className="w-3/6 max-w-xl bg-white border rounded-lg shadow dark:bg-gray-200">
        <div className="flex justify-start items-end gap-10 pb-10">
          <div className="ml-16">
            <img
              className="w-56 h-56 mt-10 rounded-full shadow-lg"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div className="mb-2">
            <div>
              <h5 className="mb-1 text-2xl capitalize font-bold text-gray-800">
                {user?.displayName}
              </h5>
              <p className="text-base text-gray-500">{user?.email}</p>
              <p className="text-base text-gray-500">Contest-Hub User</p>
            </div>

            <div>
              <button
                onClick={() =>
                  document.getElementById("update_info").showModal()
                }
                className="inline-flex mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:focus:ring-blue-800"
              >
                Update Profile
              </button>

              {/* Modal */}
              <dialog
                id="update_info"
                className="modal modal-bottom sm:modal-middle"
              >
                {/* ... (modal content) ... */}

                <div className="modal-box">
                  <h3 className="font-semibold mb-10 text-center text-lg">
                    Update {user?.displayName} profile info
                  </h3>

                  <form
                    onSubmit={handleSubmit(handleUpdate)}
                    className="max-w-sm mx-auto"
                  >
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Update Name
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:text-gray-400 ">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        {...register("name")}
                        defaultValue={user?.displayName}
                        className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <label className="block mb-2 mt-2 text-sm font-medium text-gray-900">
                      Update Profile Photo
                    </label>
                    <input
                      {...register("image")}
                      type="file"
                      className="file-input file-input-bordered w-full "
                    />

                    <button
                      type="submit"
                      className="inline-flex  mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary  dark:focus:ring-blue-800"
                    >
                      update
                    </button>
                  </form>

                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
