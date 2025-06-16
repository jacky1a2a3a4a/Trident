import { TopNav, NavContainer, MobileMenuOverlay, LogoText } from './styled';
import Hamburger from './Hamburger';
import NavLinks from '../NavLinks';
import Logo from '../../Logo';
import { StyledNavLink } from '../NavLinks/styled';
import { NavLink } from 'react-router-dom';

type MobileSidebarProps = {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

const MobileSidebar = ({
  isMobileMenuOpen,
  onToggleMobileMenu,
}: MobileSidebarProps) => {
  return (
    <TopNav className="mobile-sidebar">
      {/* Header */}
      <NavContainer>
        <Hamburger onClick={onToggleMobileMenu} isOpen={isMobileMenuOpen} />
        <StyledNavLink as={NavLink} to="/">
          <LogoText>白頭翁不吃小米</LogoText>
        </StyledNavLink>
        <Logo />
      </NavContainer>

      {/* Menu */}
      <MobileMenuOverlay $isOpen={isMobileMenuOpen}>
        <NavLinks onLinkClick={onToggleMobileMenu} />
      </MobileMenuOverlay>
    </TopNav>
  );
};

export default MobileSidebar;
