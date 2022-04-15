import './navigation.styles.scss';
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
          <Link to="/" className="logo-container">
          <CrwnLogo className='logo' />
          </Link>
        
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/auth" className="nav-link">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation