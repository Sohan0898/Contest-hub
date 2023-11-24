import { Outlet } from 'react-router-dom';
import Navber from '../../assets/Shared/Navbar/Navber';

const Root = () => {
    return (
        <div className="font-hind">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;