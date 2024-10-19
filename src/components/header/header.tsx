import './header.css';

const Header = () => {

    return(
        <div className='header-container'>
            <header>
                <div className="header-left">
                    <h1>LOGO</h1>
                </div>
                <div className="header-center">
                <h1>HOME</h1>
                <h1>LOCATION & HOURS</h1>
                <h1>MENU</h1>
                <h1>ORDER ONLINE</h1>
                </div>
                <div className="header-right">
                    <h1>CONTACT US</h1>
                </div>
            </header>
        </div>
    );
};

export default Header;