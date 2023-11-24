import { useState } from "react";

import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoIcon from "@mui/icons-material/Info";
import GoHome from "../../assets/Shared/Go Home/GoHome";
import LoginIcon from "@mui/icons-material/Login";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInWithEmail } = useAuth();
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

  const handleLogin = async (data) => {
    try {
      const { email, password } = data;

      // login user
      const result = await signInWithEmail(email, password);

      console.log(result.user);
      reset();
      Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "You Successfully Login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("password", { type: "manual", message: error.message });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contest Hub | Sign In</title>
      </Helmet>
      <GoHome></GoHome>
      <section className="bg-white max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <img
                className="object-cover object-top w-full h-full mt-4  "
                src="https://i.ibb.co/nPPRc5p/Untitled-Instagram-Post-1.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10   sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full  xl:max-w-sm 2xl:max-w-md xl:mx-auto p-10 rounded-md border">
              <h2 className="text-3xl  font-bold leading-normal  text-black">
                Sign in <span className="text-secondary"> CONTEST HUB</span>
              </h2>
              <p className="mt-2  text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link to={"/register"}>
                  <span
                    href="#"
                    title=""
                    className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                  >
                    Create a free account
                  </span>
                </Link>
              </p>

              <div>
                <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        placeholder="Enter email to get started"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-red-600 font-semibold">
                        ⚠️ {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="relative ">
                    <div className="mt-2 flex items-center justify-between">
                      <label className="text-base font-medium flex items-center  text-gray-900">
                        Password{" "}
                        <span
                          className="tooltip text-xs text-gray-500 ml-2"
                          data-tip="Password must be 6 characters or long, including at least one capital letter and one special character, such as 'P@sswd'."
                        >
                          <InfoIcon />
                        </span>
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                        })}
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute right-3 top-4 text-gray-600 focus:outline-none"
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
                        ⚠️ {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="mt-4 inline-flex items-center justify-center w-full px-4 py-4 text-base font-bold  transition-all duration-200 border border-transparent rounded-md bg-gradient-to-l from-primary to-secondary  focus:outline-none hover:opacity-70 focus:opacity-70"
                    >
                      <span className="mr-2">Sign In</span> <LoginIcon />
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign in with Google
                </button>

                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </div>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
