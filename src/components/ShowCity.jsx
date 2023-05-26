import { PropTypes } from 'prop-types';
import './ShowCity.css';

const ShowCity = ({ city }) => {
  const { LocalizedName } = city;
  const { Latitude } = city.GeoPosition;
  const { Longitude } = city.GeoPosition;

  return (
    <li className="city-details">
      <h1>
        {LocalizedName}
      </h1>
      <div className="coord-div">
        <p>
          <b>Lat :</b>
          &nbsp;&nbsp;
          {Latitude}
        </p>
        <p>
          <b>Lon :</b>
          &nbsp;&nbsp;
          {Longitude}
        </p>
      </div>
    </li>
  );
};

ShowCity.propTypes = {
  city: PropTypes.shape.isRequired,
};

export default ShowCity;
