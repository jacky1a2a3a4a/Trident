import { SidebarContainer, Logo, LogoText } from './styled';
import NavLinks from '../NavLinks';

const DesktopSidebar = () => {
  return (
    <SidebarContainer className="desktop-sidebar">
      <Logo>
        <LogoText>白頭翁不吃小米</LogoText>
      </Logo>
      <NavLinks />
    </SidebarContainer>
  );
};

export default DesktopSidebar;
