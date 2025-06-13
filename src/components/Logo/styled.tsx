import styled from 'styled-components';

//// 容器
export const LogoContainer = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 白頭翁logo
export const Bird = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  .head {
    position: absolute;
    top: 3px;
    left: 1px;
    width: 21px;
    height: 10px;
    border-radius: 100% 31% 32% 0% / 100% 53% 78% 34%;
    border: 3px solid currentColor;
    border-bottom: none;
    border-right: none;
    border-left: none;
    background: transparent;
  }

  .eye {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 3.2px;
    height: 3.2px;
    background-color: currentColor;
    border-radius: 50%;
  }

  .beak {
    position: absolute;
    top: 8px;
    left: 20px;
    width: 5px;
    height: 1px;
    background: transparent;
    border-top: 3px solid currentColor;
    border-radius: 0 90% 0 0;
    transform: rotate(-10deg);
  }

  .chin {
    position: absolute;
    bottom: 4px;
    left: 2px;
    width: 20px;
    height: 7px;
    border-radius: 0% 0% 60% 0% / 0% 0% 94% 27%;
    border: 3px solid currentColor;
    border-right: none;
    border-top: none;
    border-left: none;
    background: transparent;
  }
`;
