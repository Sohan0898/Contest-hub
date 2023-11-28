import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const PaymentToRegister = () => {
    const axiosSecure =useAxiosSecure();

    const {user} =useAuth();

    const {creatorName,creatorImage, email ,image, name, price,prize, task, tag, description, date} = useLoaderData();
    

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    // console.log(data);

   const ParticipateInfo = {
        creatorEmail : email,
        participateEmail : user?.email,
        participateName : user?.displayName,
        participateIamge: user?.photoURL,
        creatorName : creatorName,
        creatorImage : creatorImage,
        attempt: 'successful',
        contestName: name,
        contestImage:image,
        paid : data.paid,
        role : 'attend',
        deadline: date,
        task : task,
        des: description,
        tag: tag,
        prize : prize,
    }

    console.log(ParticipateInfo);


    const addedContest = await axiosSecure.post("/participates", ParticipateInfo);
      console.log(addedContest.data);
      if (addedContest.data.insertedId) {
        reset();
        toast.success(
          `${ParticipateInfo?.participateName
            .split(/\s+/)
            .slice(0, 1)
            .join(" ")}...has Participated successfull.`
        );
      }
    }

  return (
    <div className="min-h-screen">
      <div className="max-w-lg  mx-auto mt-20 p-8 bg-gray-100 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Payment Form</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 ">
            <label className="block text-sm pb-2 font-medium text-gray-600">
              Name
            </label>
            <input
              className="input text-sm font-medium w-full bg-gray-200"
              defaultValue={user?.displayName}
              readOnly
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm pb-2 font-medium text-gray-600">
              Email
            </label>
            <input
            defaultValue={user?.email}
            readOnly
              className="input w-full text-sm font-medium  bg-gray-200"
              placeholder="Enter Your Email"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm pb-2 font-medium text-gray-600">
              Contest Name
            </label>
            <input
              className="input text-sm font-medium w-full bg-gray-200"
              defaultValue={name}
              readOnly
              {...register("contestName", {
                required: "Contest name is required",
              })}
            />
            {errors.contestName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contestName.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm pb-2 font-medium text-gray-600">
              Price
            </label>
            <input
            defaultValue={price}
            readOnly
              className="input text-sm font-medium w-full bg-gray-200"
              placeholder="Enter Contest Price"
              type="number"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block  text-sm pb-2 font-medium text-gray-600">
              Did you pay?
            </label>
            <select
              {...register("paid")}
              className="input text-sm font-medium bg-gray-200 form-select mt-1 block w-full"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button className="btn mt-8 w-full btn-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentToRegister;
