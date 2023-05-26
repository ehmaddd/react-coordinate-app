import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getCoordinates, clearContainer } from '../Redux/coordinate/coordinateSlice';
import ShowCity from './ShowCity';
import Home from './Home';
import './Coordinates.css';
import BA from '../images/BA.png';
import GB from '../images/GB.png';
import IS from '../images/IS.png';
import JK from '../images/JK.png';
import KP from '../images/KP.png';
import PB from '../images/PB.png';
import SD from '../images/SD.png';
import TA from '../images/TA.png';

const getImage = (province) => {
  let img;
  if (province === 'BA') img = BA;
  else if (province === 'GB') img = GB;
  else if (province === 'IS') img = IS;
  else if (province === 'JK') img = JK;
  else if (province === 'KP') img = KP;
  else if (province === 'PB') img = PB;
  else if (province === 'SD') img = SD;
  else if (province === 'TA') img = TA;
  return img;
};

const getName = (province) => {
  let prov;
  if (province === 'BA') prov = 'BALOCHISTAN';
  else if (province === 'GB') prov = 'GILGIT BALTISTAN';
  else if (province === 'IS') prov = 'ISLAMABAD';
  else if (province === 'JK') prov = 'AZAD JAMMU KASHMIR';
  else if (province === 'KP') prov = 'KHYBER PAKHTUNKHWA';
  else if (province === 'PB') prov = 'PUNJAB';
  else if (province === 'SD') prov = 'SINDH';
  else if (province === 'TA') prov = 'FEDERALLY ADMINISTERED TRIBAL AREAS';
  return prov;
};

const Weather = () => {
  const { province } = useParams();

  const balochistan = ['Quetta', 'Gwadar', 'Kalat'];
  const gilgit = ['Skardu', 'Gilgit', 'Shigar'];
  const islamabad = ['Phulgran', 'Golra', 'Lohi Bher'];
  const kashmir = ['Muzaffarabad', 'Mirpur', 'Rawalakot'];
  const khyber = ['Peshawar', 'Swabi', 'Kohat'];
  const punjab = ['Lahore', 'Faisalabad', 'Bahawalpur'];
  const sindh = ['Karachi', 'Hyderabad', 'Larkana'];
  const fata = ['Jamrud', 'Sadda'];

  const cities = useSelector((state) => state.coordinate.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    if (province === 'BA') {
      balochistan.map((city) => {
        const coord = dispatch(getCoordinates(city));
        return coord;
      });
    } else if (province === 'GB') {
      gilgit.map((city) => {
        const coord = dispatch(getCoordinates(city));
        return coord;
      });
    } else if (province === 'IS') {
      islamabad.map((city) => {
        const coord = dispatch(getCoordinates(city));
        return coord;
      });
    } else if (province === 'JK') {
      kashmir.map((city) => {
        const coord = dispatch(getCoordinates(city));
        return coord;
      });
    } else if (province === 'KP') {
      khyber.map((city) => {
        const coord = dispatch(getCoordinates(city));
        return coord;
      });
    } else if (province === 'PB') {
      punjab.map((city) => {
        const coord = dispatch(getCoordinates(city));
        return coord;
      });
    } else if (province === 'SD') {
      sindh.map((city) => {
        const coord = dispatch(getCoordinates(city));
        return coord;
      });
    } else if (province === 'TA') {
      fata.map((city) => {
        const coord = dispatch(getCoordinates(city));
        return coord;
      });
    }
    return () => {
      dispatch(clearContainer());
    };
  }, []);

  return (
    <>
      <div className="province-heading-div">
        <Link to="/" element={<Home />}>
          <span id="backArrow" className="material-symbols-outlined">arrow_circle_left</span>
        </Link>
        <img className="prov-img" src={getImage(province)} alt={province.EnglishName} />
        <h1>{getName(province).toUpperCase()}</h1>
      </div>
      <h1 className="stat-heading">CITY/TOWN BREAKDOWN</h1>
      <ul className="city-container">
        {cities.map((city) => <ShowCity key={city.id} city={city} />)}
      </ul>
    </>
  );
};

export default Weather;
