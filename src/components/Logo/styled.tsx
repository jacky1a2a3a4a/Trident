import styled from 'styled-components';

type LogoContainerProps = {
  size?: number;
};

export const LogoContainer = styled.div<LogoContainerProps>`
  background-color: ${({ theme }) => theme.colors.background.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position: relative;
  width: ${({ size = 40 }) => size}px;
  height: ${({ size = 40 }) => size}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type BirdProps = {
  size?: number;
};

// 白頭翁logo
export const Bird = styled.div<BirdProps>`
  position: relative;
  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;

  .head {
    position: absolute;
    top: ${({ size = 24 }) => size * 0.125}px;
    left: ${({ size = 24 }) => size * 0.042}px;
    width: ${({ size = 24 }) => size * 0.875}px;
    height: ${({ size = 24 }) => size * 0.417}px;
    border-radius: 100% 31% 32% 0% / 100% 53% 78% 34%;
    border: ${({ size = 24 }) => size * 0.125}px solid currentColor;
    border-bottom: none;
    border-right: none;
    border-left: none;
    background: transparent;
  }

  .eye {
    position: absolute;
    top: ${({ size = 24 }) => size * 0.417}px;
    left: ${({ size = 24 }) => size * 0.625}px;
    width: ${({ size = 24 }) => size * 0.133}px;
    height: ${({ size = 24 }) => size * 0.133}px;
    background-color: currentColor;
    border-radius: 50%;
  }

  .beak {
    position: absolute;
    top: ${({ size = 24 }) => size * 0.333}px;
    left: ${({ size = 24 }) => size * 0.833}px;
    width: ${({ size = 24 }) => size * 0.208}px;
    height: ${({ size = 24 }) => size * 0.042}px;
    background: transparent;
    border-top: ${({ size = 24 }) => size * 0.125}px solid currentColor;
    border-radius: 0 90% 0 0;
    transform: rotate(-10deg);
  }

  .chin {
    position: absolute;
    bottom: ${({ size = 24 }) => size * 0.167}px;
    left: ${({ size = 24 }) => size * 0.083}px;
    width: ${({ size = 24 }) => size * 0.833}px;
    height: ${({ size = 24 }) => size * 0.292}px;
    border-radius: 0% 0% 60% 0% / 0% 0% 94% 27%;
    border: ${({ size = 24 }) => size * 0.125}px solid currentColor;
    border-right: none;
    border-top: none;
    border-left: none;
    background: transparent;
  }
`;
