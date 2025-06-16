import { MobileMenuButton, HamburgerIcon } from './styled';

type HamburgerProps = {
  onClick: () => void;
  isOpen: boolean;
};

const Hamburger = ({ onClick, isOpen }: HamburgerProps) => {
  return (
    <MobileMenuButton onClick={onClick}>
      <HamburgerIcon $isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
    </MobileMenuButton>
  );
};

export default Hamburger;
