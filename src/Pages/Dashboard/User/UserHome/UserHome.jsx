import { Helmet } from "react-helmet-async";
import useAuth from "../../../../Hooks/useAuth";



const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <Helmet>
        <title>Contest Hub | Dashboard| User Home </title>
      </Helmet>
            <h2 className="text-3xl mt-8">
                <span> Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;