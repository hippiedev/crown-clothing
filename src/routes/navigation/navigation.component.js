import { useContext } from "react";
import "./navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
