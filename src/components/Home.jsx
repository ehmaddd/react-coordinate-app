import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filterProvince, getProvinces } from '../Redux/home/homeSlice';
import ShowProvince from './ShowProvince';
import './Home.css';
import Pakistan from '../images/pakistan.png';

const Home = () => {
  const { filtered, isLoading } = useSelector((state) => state.province);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProvinces());
  }, []);

  if (isLoading === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="heading-div">
        <img alt="Pakistan" src={Pakistan} />
        <h1>PAKISTAN</h1>
      </div>
      <h1 className="stat-heading">STATS BY STATES</h1>
      <input type="text" placeholder="Search by Name" className="search-state" onKeyUp={(e) => dispatch(filterProvince(e.target.value))} />
      <ul className="province-ul">
        {filtered ? filtered.map((province) => <ShowProvince key={province.ID} province={province} />) : 'No Province'}
      </ul>
    </>
  );
};

export default Home;
