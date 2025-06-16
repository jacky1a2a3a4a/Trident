import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main, SidebarWrapper } from './styled';
import GlobalStyle from 'src/styles/GlobalStyle';

import Sidebar from 'src/components/Sidebar';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <SidebarWrapper>
          <Sidebar
            isMobileMenuOpen={isMobileMenuOpen}
            onToggleMobileMenu={toggleMobileMenu}
          />
        </SidebarWrapper>

        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  );
};

export default Layout;
