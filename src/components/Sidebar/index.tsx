import {
  TopNav,
  NavContainer,
  SidebarContainer,
  MobileMenuOverlay,
  MobileMenuHeader,
  CloseButton,
  Logo,
  LogoText,
  Nav,
  NavLink,
  CircleLogo,
} from './styled';
import Hamburger from './Hamburger';

type SidebarProps = {
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
  onToggleMobileMenu: () => void;
};

const Sidebar = ({
  isMobileMenuOpen,
  onCloseMobileMenu,
  onToggleMobileMenu,
}: SidebarProps) => {
  return (
    <>
      {/* Top Navigation Bar */}
      <TopNav>
        <NavContainer>
          <Hamburger onClick={onToggleMobileMenu} />
          <Logo>
            <LogoText>白頭翁不吃小米</LogoText>
          </Logo>
          <CircleLogo>白</CircleLogo>
        </NavContainer>
      </TopNav>

      {/* Desktop Sidebar */}
      <SidebarContainer>
        <Logo>
          <LogoText>白頭翁不吃小米</LogoText>
        </Logo>

        <Nav>
          <NavLink href="#characteristics">白頭翁的特性</NavLink>
          <NavLink href="#story">白頭翁的故事</NavLink>
          <NavLink href="#gallery">白頭翁的美照</NavLink>
          <NavLink href="#conservation">白頭翁的危機</NavLink>
        </Nav>
      </SidebarContainer>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay $isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <CloseButton onClick={onCloseMobileMenu}>✕</CloseButton>
        </MobileMenuHeader>
        <Nav>
          <NavLink href="#characteristics">白頭翁的特性</NavLink>
          <NavLink href="#story">白頭翁的故事</NavLink>
          <NavLink href="#gallery">白頭翁的美照</NavLink>
          <NavLink href="#conservation">白頭翁的危機</NavLink>
        </Nav>
      </MobileMenuOverlay>
    </>
  );
};

export default Sidebar;
