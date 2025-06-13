import styled from 'styled-components';

export const LogoContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bird = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    width: 20px;
    height: 12px;
    border-radius: 50% 50% 0 50%;
    border: 2px solid currentColor;
    border-right: none;
    transform: rotate(-45deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 6px;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
  }
`;
