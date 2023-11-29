import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import { PulseLoader } from "react-spinners";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
              <PulseLoader color="#1786F9" loading={loading} size={30} />
            </div>
          );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;