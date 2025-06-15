import { Nav } from './styled';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <Nav>
      <NavLink to="/characteristics">白頭翁的特性</NavLink>
      <NavLink to="/story">白頭翁的故事</NavLink>
      <NavLink to="/gallery">白頭翁的美照</NavLink>
      <NavLink to="/conservation">白頭翁的危機</NavLink>
    </Nav>
  );
};

export default NavLinks;
