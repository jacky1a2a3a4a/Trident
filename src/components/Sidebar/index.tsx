import { SidebarWrapper } from './styled';
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

type SidebarProps = {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

const Sidebar = ({ isMobileMenuOpen, onToggleMobileMenu }: SidebarProps) => {
  return (
    <SidebarWrapper>
      {/* 桌面板 */}
      <DesktopSidebar />

      {/* 行動版 */}
      <MobileSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={onToggleMobileMenu}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
