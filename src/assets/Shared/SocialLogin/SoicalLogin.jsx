import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SoicalLogin = () => {

    

    const{googleSignIn }= useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();


    const handleGoogleSignIn = () => {
        googleSignIn()
          .then((result) => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-bottom",
                        icon: "success",
                        title: "You Successfully Register",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate("/");
                }
            })
            Swal.fire({
                position: "top-bottom",
                icon: "success",
                title: "You Successfully Login",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <div>
            <div className="mt-3 space-y-3">
                <button
                  onClick={handleGoogleSignIn}
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <span className="mr-2"><img className="w-6" src="https://i.ibb.co/TT9y98j/icons8-google-48-1.png" alt="" /></span> Google 
                </button>
              </div>
        </div>
    );
};

export default SoicalLogin;