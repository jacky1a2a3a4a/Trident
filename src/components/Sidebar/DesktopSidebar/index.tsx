import {
  SidebarContainer,
  LogoWrapper,
  LogoText,
  FixedWrapper,
} from './styled';
import NavLinks from '../NavLinks';
import Logo from 'src/components/Logo';
import { StyledNavLink } from '../NavLinks/styled';
import { NavLink } from 'react-router-dom';

const DesktopSidebar = () => {
  return (
    <SidebarContainer className="desktop-sidebar">
      <LogoWrapper>
        <StyledNavLink as={NavLink} to="/">
          <LogoText>白頭翁不吃小米</LogoText>
        </StyledNavLink>
        <FixedWrapper>
          <Logo size={90} />
        </FixedWrapper>
      </LogoWrapper>
      <NavLinks />
    </SidebarContainer>
  );
};

export default DesktopSidebar;
