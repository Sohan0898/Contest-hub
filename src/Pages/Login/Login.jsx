import { useState } from "react";



import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InfoIcon from "@mui/icons-material/Info";
import GoHome from "../../assets/Shared/Go Home/GoHome";
import LoginIcon from "@mui/icons-material/Login";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import SoicalLogin from "../../assets/Shared/SocialLogin/SoicalLogin";
import toast from "react-hot-toast";

const Login = () => {
  const { signInWithEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
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
      toast.success(`${result?.user?.displayName.split(/\s+/)
      .slice(0, 1)
      .join(" ")} has successfully signed`);
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
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
                        <LoginIcon />
                      <span className="ml-2">Sign In</span> 
                    </button>
                  </div>
                </form>
              </div>

              <SoicalLogin></SoicalLogin>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
