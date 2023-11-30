import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import useCreator from "../../Hooks/useCreator";
import { PulseLoader } from "react-spinners";

const CreatorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isCreator, isCreatorLoading] = useCreator();
    const location = useLocation();

    if (loading || isCreatorLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
              <PulseLoader color="#1786F9" loading={loading} size={30} />
            </div>
          );
    }

    if (user && isCreator) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default CreatorRoute;