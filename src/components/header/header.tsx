import './header.css';
import BrandLogo from '../../images/converted_image.png';

const Header = () => {

    return(
        <div className='header-container'>
            <header>
                <div className="header-left">
                    <img src={BrandLogo} alt="brand name"  width='75'/>
                </div>
                <div className="header-center">
                <h1 className='header-text'>HOME</h1>
                <h1 className='header-text'>LOCATION & HOURS</h1>
                <h1 className='header-text'>MENU</h1>
                <h1 className='header-text'>ORDER ONLINE</h1>
                </div>
                <div className="header-right">
                    <h1 className='header-text'>CONTACT US</h1>
                </div>
            </header>
        </div>
    );
};

export default Header;