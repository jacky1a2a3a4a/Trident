import { Nav, StyledNavLink } from './styled';
import { NavLink } from 'react-router-dom';

type NavLinksProps = {
  onLinkClick?: () => void;
};

const NavLinks = ({ onLinkClick }: NavLinksProps) => {
  return (
    <Nav>
      <StyledNavLink as={NavLink} to="/characteristics" onClick={onLinkClick}>
        白頭翁的特性
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/story" onClick={onLinkClick}>
        白頭翁的故事
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/gallery" onClick={onLinkClick}>
        白頭翁的美照
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/conservation" onClick={onLinkClick}>
        白頭翁的危機
      </StyledNavLink>
    </Nav>
  );
};

export default NavLinks;
