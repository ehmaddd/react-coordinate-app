import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';

const Navbar = () => (
  <>
    <Link to="/" element={<Home />}>Home</Link>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);

export default Navbar;
