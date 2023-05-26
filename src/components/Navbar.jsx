import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

const Navbar = () => (
  <>
    <Link to="/" element={<Home />}>Home</Link>
    <Link to="/details" element={<Details />}>Details</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>
);

export default Navbar;
