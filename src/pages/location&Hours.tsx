import "../styles/location&Hours.css";

const LocationHours = () => {
  return (
    <div className="hours-container">
    <div className="location-container">
        <h1 className="location-title">Location & Hours</h1>
        <h1 className="hours-title">(INSERT LOCATION HERE)</h1>
        <h2>Current hours (until sold out)</h2>
      <div className="times">
        <div className="day-container">
          <h1>Monday</h1>
          <h1>Closed</h1>
        </div>
        <div className="day-container">
          <h1>Tuesday</h1>
          <h1>Closed</h1>
        </div>
        <div className="day-container">
          <h1>Wednesday</h1>
          <h1>8:00am - 2:00pm</h1>
        </div>
        <div className="day-container">
          <h1>Thursday</h1>
          <h1>8:00am - 2:00pm</h1>
        </div>
        <div className="day-container">
          <h1>Friday</h1>
          <h1>8:00am - 2:00pm</h1>
        </div>
        <div className="day-container">
          <h1>Saturday</h1>
          <h1>8:00am - 2:00pm</h1>
        </div>
        <div className="day-container">
          <h1>Sunday</h1>
          <h1>8:00am - 2:00pm</h1>
        </div>
      </div>
    </div>
    </div>

  );
};

export default LocationHours;
