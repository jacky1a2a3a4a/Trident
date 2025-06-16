import { LogoContainer, Bird } from './styled';

type LogoProps = {
  size?: number;
};

const Logo = ({ size }: LogoProps) => {
  return (
    <LogoContainer size={size}>
      <Bird size={size ? size * 0.6 : undefined}>
        <span className="head" />
        <span className="eye" />
        <span className="beak" />
        <span className="chin" />
      </Bird>
    </LogoContainer>
  );
};

export default Logo;
