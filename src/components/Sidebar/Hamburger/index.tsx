import { MobileMenuButton, HamburgerIcon } from './styled';

type HamburgerProps = {
  onClick: () => void;
};

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <MobileMenuButton onClick={onClick}>
      <HamburgerIcon>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
    </MobileMenuButton>
  );
};

export default Hamburger;
