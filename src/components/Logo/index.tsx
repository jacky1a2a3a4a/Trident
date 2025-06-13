import { LogoContainer, Bird } from './styled';

const Logo = () => {
  return (
    <LogoContainer>
      <Bird>
        <span className="head" />
        <span className="eye" />
        <span className="beak" />
        <span className="chin" />
      </Bird>
    </LogoContainer>
  );
};

export default Logo;
