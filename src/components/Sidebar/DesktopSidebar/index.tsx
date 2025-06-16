import {
  SidebarContainer,
  LogoWrapper,
  LogoText,
  FixedWrapper,
} from './styled';
import NavLinks from '../NavLinks';
import Logo from 'src/components/Logo';

// 導入 NavLink
import { NavLink } from 'react-router-dom';

const DesktopSidebar = () => {
  return (
    <SidebarContainer className="desktop-sidebar">
      <LogoWrapper>
        <NavLink to="/">
          <LogoText>白頭翁不吃小米</LogoText>
        </NavLink>
        <FixedWrapper>
          <Logo size={90} />
        </FixedWrapper>
      </LogoWrapper>
      <NavLinks />
    </SidebarContainer>
  );
};

export default DesktopSidebar;
