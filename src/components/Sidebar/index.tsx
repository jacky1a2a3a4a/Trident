import {
  SidebarContainer,
  MobileMenuOverlay,
  MobileMenuHeader,
  CloseButton,
  Logo,
  LogoText,
  Nav,
  NavLink,
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
      {/* Mobile Menu Button */}
      <Hamburger onClick={onToggleMobileMenu} />

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
          <Logo>
            <LogoText>白頭翁不吃小米</LogoText>
          </Logo>
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
