import { Link} from 'react-router-dom';
import logo from '../../../../public/fabicon.png' ;

const Logo = () => {

    

    return (
        <div>
            <Link to={'/'}>
            <img className='h-9 hidden lg:flex mr-1'  src={logo} alt="" />
        </Link>
        </div>
    );
};

export default Logo;