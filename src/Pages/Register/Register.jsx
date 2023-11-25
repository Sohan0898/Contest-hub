import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoIcon from "@mui/icons-material/Info";
import GoHome from "../../assets/Shared/Go Home/GoHome";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SoicalLogin from "../../assets/Shared/SocialLogin/SoicalLogin";

const Register = () => {
  const { signUpWithEmail } = useAuth();
  const axiosPublic = useAxiosPublic();

  const [regError, setRegError] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    // password Validate
    try {
      if (data.password.length < 6) {
        setError("password", {
          type: "manual",
          message: "Password must be six characters or longer!",
        });
        return;
      } else if (!/[A-Z]/.test(data.password)) {
        setError("password", {
          type: "manual",
          message: "Password must contain at least one capital letter!",
        });
        return;
      } else if (!/[!@#$%^&*]/.test(data.password)) {
        setError("password", {
          type: "manual",
          message: "Password must contain at least one special character!",
        });
        return;
      }

      // create user
      const result = await signUpWithEmail(data.email, data.password);
      console.log(result?.user);

      // Update user profile
      await updateProfile(result?.user, {
        displayName: data.name,
        photoURL: data.photo,
      });

      // create user entry in the database
      const userInfo = {
        name: data.name,
        email: data.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          console.log("user added to the DB");
          reset();
          Swal.fire({
            position: "top-bottom",
            icon: "success",
            title: `You Sign Up Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
    } catch (error) {
      console.error(error);
      setRegError(error.message);
    }
  };

  return (
    <div className="bg-[#0d1a33]">
      <Helmet>
        <title>Contest Hub | Sign Up</title>
      </Helmet>
      <GoHome></GoHome>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/XXrHVtP/Untitled-design-8.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 my-10 lg:flex lg:flex-row-reverse justify-between items-center  lg:gap-64 ">
          <div>
            <img
              className="lg:w-3/4 hidden lg:flex "
              src="https://i.ibb.co/Jrhh5DQ/Untitled-Instagram-Post.png"
              alt=""
            />
          </div>

          <div className="md:full lg:w-3/5 bg-gray-100 rounded-md shadow-md">
            <div className="px-7 py-5 md:px-9 md:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-third">
                  Welcome to{" "}
                  <span className="text-secondary"> CONTEST HUB </span>
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Already joined?{" "}
                  <Link to={"/login"}>
                    <span className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                      Sign in now
                    </span>
                  </Link>
                </p>
              </div>

              <form onSubmit={handleSubmit(handleRegister)} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base relative font-medium text-gray-900">
                      Name
                      <span className="text-red-600 absolute -top-1">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        } rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                        {...register("name", { required: "Name is required" })}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-red-600 font-semibold">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-base  font-medium text-gray-900">
                      Photo URL
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="photo"
                        placeholder="Enter your photoURL"
                        className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border  rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                        {...register("photo")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base relative  font-medium text-gray-900">
                      Email address
                      <span className="text-red-600 absolute -top-1">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email to get started"
                        className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border ${
                          errors.email ? " border-red-500" : "border-gray-200"
                        } rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-red-600 font-semibold">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="text-base relative font-medium text-gray-900">
                      Password{" "}
                      <span className="text-red-600 absolute -top-1">*</span>
                      <span
                        className="tooltip text-xs text-gray-500 ml-2"
                        data-tip="Password must be 6 characters or long, including at least one capital letter and one special character, such as 'P@sswd'."
                      >
                        <InfoIcon />
                      </span>
                    </label>
                    <div className="mt-2.5 flex items-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border ${
                          errors.password ? "border-red-500" : "border-gray-200"
                        } rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute right-4 text-gray-600 focus:outline-none"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-2 text-red-600 font-semibold">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  {regError && (
                    <p className="text-red-600 font-semibold">⚠️ {regError}</p>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-secondary border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                        <SensorOccupiedIcon />
                      <span className="ml-2">Sign Up</span>{" "}
                      
                    </button>
                  </div>
                </div>
              </form>
              <SoicalLogin></SoicalLogin>

              <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                This site is protected by the Google{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
