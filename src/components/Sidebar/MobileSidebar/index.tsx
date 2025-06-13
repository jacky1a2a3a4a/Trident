import {
  TopNav,
  NavContainer,
  MobileMenuOverlay,
  Logo as LogoWrapper,
  LogoText,
} from './styled';
import Hamburger from './Hamburger';
import NavLinks from '../NavLinks';
import Logo from '../../Logo';

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
        <LogoWrapper>
          <LogoText>白頭翁不吃小米</LogoText>
        </LogoWrapper>
        <Logo />
      </NavContainer>

      {/* Menu */}
      <MobileMenuOverlay $isOpen={isMobileMenuOpen}>
        <NavLinks />
      </MobileMenuOverlay>
    </TopNav>
  );
};

export default MobileSidebar;
