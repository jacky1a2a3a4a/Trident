import {
  TopNav,
  NavContainer,
  MobileMenuOverlay,
  Logo,
  LogoText,
  CircleLogo,
} from './styled';
import Hamburger from './Hamburger';
import NavLinks from '../NavLinks';

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
      <NavContainer>
        <Hamburger onClick={onToggleMobileMenu} isOpen={isMobileMenuOpen} />
        <Logo>
          <LogoText>白頭翁不吃小米</LogoText>
        </Logo>
        <CircleLogo>白</CircleLogo>
      </NavContainer>

      <MobileMenuOverlay $isOpen={isMobileMenuOpen}>
        <NavLinks />
      </MobileMenuOverlay>
    </TopNav>
  );
};

export default MobileSidebar;
