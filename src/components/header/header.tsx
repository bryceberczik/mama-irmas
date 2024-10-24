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
            {" "}
            <Link
              to="/"
              className={currentPage === "/" ? "activeNav" : "header-text"}
            >
              HOME
            </Link>
          </h1>
          <h1 className="header-text">LOCATION & HOURS</h1>
          <h1 className="header-text">MENU</h1>
          <h1 className="header-text">ORDER ONLINE</h1>
        </div>
        <div className="header-right">
          <h1 className="header-text">CONTACT US</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
