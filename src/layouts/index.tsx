import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './styled';

import Sidebar from 'src/components/Sidebar';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Container>
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={closeMobileMenu}
        onToggleMobileMenu={toggleMobileMenu}
      />

      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
