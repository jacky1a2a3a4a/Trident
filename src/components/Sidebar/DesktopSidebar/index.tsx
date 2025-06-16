import {
  SidebarContainer,
  LogoWrapper,
  LogoText,
  FixedWrapper,
} from './styled';
import NavLinks from '../NavLinks';
import Logo from 'src/components/Logo';

const DesktopSidebar = () => {
  return (
    <SidebarContainer className="desktop-sidebar">
      <LogoWrapper>
        <a href="/">
          <LogoText>白頭翁不吃小米</LogoText>
        </a>
        <FixedWrapper>
          <Logo size={90} />
        </FixedWrapper>
      </LogoWrapper>
      <NavLinks />
    </SidebarContainer>
  );
};

export default DesktopSidebar;
