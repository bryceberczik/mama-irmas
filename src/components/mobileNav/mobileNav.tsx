import './mobileNav.css';
import BrandLogo from '../../images/converted_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MobileNav = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(

        <div>
            <header className='mobilenav-container'>
            <FontAwesomeIcon icon={faBars} onClick={handleShow} className='hamburger-menu' />
                <img src={BrandLogo} alt="Brand logo" />
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
            </header>

            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="offcanvas-body">
            <Link className="canvOpt"  to="/">
              <h3 className="canvOpt">HOME</h3>
            </Link>
            <Link className="canvOpt" to="/location&hours">
              <h3 className="canvOpt">LOCATION & HOURS</h3>
            </Link>
            <Link className="canvOpt"  to="/savedbooks">
              <h3 className="canvOpt">My books</h3>
            </Link>
            <Link className="canvOpt"  to="/settings">
              <h3 className="canvOpt">Settings</h3>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
};

export default MobileNav;