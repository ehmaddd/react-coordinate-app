import { Link } from 'react-router-dom';
import './ShowProvince.css';
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
  if (province.province.ID === 'BA') img = BA;
  else if (province.province.ID === 'GB') img = GB;
  else if (province.province.ID === 'IS') img = IS;
  else if (province.province.ID === 'JK') img = JK;
  else if (province.province.ID === 'KP') img = KP;
  else if (province.province.ID === 'PB') img = PB;
  else if (province.province.ID === 'SD') img = SD;
  else if (province.province.ID === 'TA') img = TA;
  return img;
};

const ShowProvince = (props) => {
  const province = props;

  return (
    <li>
      <div>
        <img className="province-img" src={getImage(province)} alt={province.EnglishName} />
        <Link to={`/details/${province.province.ID}`}>
          <span
            className="material-symbols-outlined"
          >
            arrow_circle_right
          </span>
          <div className="province-heading">
            <h2>{province.province.EnglishName.toUpperCase()}</h2>
            <h3 className="province-level">
              Level :&nbsp;
              {province.province.Level}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default ShowProvince;
