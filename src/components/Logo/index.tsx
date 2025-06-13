import { LogoContainer, Bird } from './styled';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <LogoContainer className={className}>
      <Bird />
    </LogoContainer>
  );
};

export default Logo;
