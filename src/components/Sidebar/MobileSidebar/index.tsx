import { TopNav, NavContainer, MobileMenuOverlay, LogoText } from './styled';
import Hamburger from './Hamburger';
import NavLinks from '../NavLinks';
import Logo from '../../Logo';

// 導入 NavLink
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
        <NavLink to="/" >
          <LogoText>白頭翁不吃小米</LogoText>
        </NavLink>
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
