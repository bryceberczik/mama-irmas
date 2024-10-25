import "./header.css";
import BrandLogo from "../../images/converted_image.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const currentPage = useLocation().pathname;
  return (
    <div className="header-container">
      <header>
        <div className="header-left">
          <img src={BrandLogo} alt="brand name" width="75" />
        </div>
        <div className="header-center">
          <h1 className="header-text">
            <Link
              to="/"
              className={currentPage === "/" ? "activeNav" : "restNav"}
            >
              HOME
            </Link>
          </h1>
          <h1 className="header-text">
            <Link
              to="/location&hours"
              className={currentPage === "/location&hours" ? "activeNav" : "restNav"}
            >
              LOCATION & HOURS
            </Link>
          </h1>
          <h1 className="header-text">
            <Link
              to="/menu"
              className={currentPage === "/menu" ? "activeNav" : "restNav"}
            >
              MENU
            </Link>
          </h1>
          <h1 className="header-text">
            <Link
              to="/orderonline"
              className={currentPage === "/orderonline" ? "activeNav" : "restNav"}
            >
              ORDER ONLINE
            </Link>
          </h1>
        </div>
        <div className="header-right">
        <h1 className="header-text">
            <Link
              to="/contact"
              className={currentPage === "/contact" ? "activeNav" : "restNav"}
            >
              CONTACT
            </Link>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
