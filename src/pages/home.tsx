import "../styles/home.css";
import firstPhoto from "../images/foodtruck_1.jpeg";
import taco from '../images/tacos.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="first-section">
        <div className="first-section-intro">
          <h1 className="home-intro">Welcome to Mama Irma's,</h1>
          <h1 className="home-intro">Enjoy your stay.</h1>
        </div>
        <div className="about-us">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            quas magnam animi reiciendis maiores assumenda error non numquam
            aperiam atque nihil, perspiciatis explicabo mollitia iusto debitis
            delectus? Natus, sequi doloremque?
          </p>
        </div>
      </div>
      <div className="serving-austin">
        <h2>
          Serving authentic Mexican cuisine to the heart of Austin, Texas.
        </h2>
      </div>
      <div className="food-examps">
        <div className="line-1">
          <img src={taco} alt="taco" />
          <div className="line-1-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vitae error quasi? Deserunt blanditiis quis fugit, quidem illum debitis. Ea, delectus quibusdam. Commodi fugiat possimus facilis quas libero, impedit atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam perspiciatis nulla ex nisi corrupti consequatur sed iste omnis beatae. Nostrum, tempora nesciunt consequuntur eveniet id animi quas quos dolorem.</p>
          </div>
        </div>
        <div className="line-1">
        <div className="line-1-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vitae error quasi? Deserunt blanditiis quis fugit, quidem illum debitis. Ea, delectus quibusdam. Commodi fugiat possimus facilis quas libero, impedit atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam perspiciatis nulla ex nisi corrupti consequatur sed iste omnis beatae. Nostrum, tempora nesciunt consequuntur eveniet id animi quas quos dolorem.</p>
          </div>
          <img src={taco} alt="taco" />
        </div>
        <div className="line-1">
          <img src={taco} alt="taco" />
          <div className="line-1-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vitae error quasi? Deserunt blanditiis quis fugit, quidem illum debitis. Ea, delectus quibusdam. Commodi fugiat possimus facilis quas libero, impedit atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam perspiciatis nulla ex nisi corrupti consequatur sed iste omnis beatae. Nostrum, tempora nesciunt consequuntur eveniet id animi quas quos dolorem.</p>
          </div>
        </div>
      </div>
      <div className="extra-home-btns">
        <div className="find-us">
          <h1>Find us here</h1>
          <div className="click-location">
            <h1>LOCATION</h1>
          </div>
        </div>
        <div className="menu-extra">
          <h1>See our menu</h1>
          <div className="click-menu">
            <h1>MENU</h1>
          </div>
        </div>
      </div>
      <div className="friendly-staff">
        <h1>Our friendly staff</h1>
      </div>
      <div className="first-home-photo">
        <img src={firstPhoto} alt="foodtruck" />
        <img src={firstPhoto} alt="foodtruck" />
        <img src={firstPhoto} alt="foodtruck" />
      </div>
      <div className="reviews">
        <h1>Reviews</h1>
      </div>
    </div>
  );
};

export default Home;
