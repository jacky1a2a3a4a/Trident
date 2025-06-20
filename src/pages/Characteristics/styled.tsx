import styled from 'styled-components';
import bannerImage from 'src/assets/images/img-banner-cut.png';

//// 元件容器
export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  width: 100%;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

//// 英雄區塊
export const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${bannerImage});
  background-size: cover;
  background-position: center;

  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    height: 380px;
    padding: 2rem 1rem;
  }
`;

// 英雄區塊內容
export const HeroContent = styled.div`
  color: ${({ theme }) => theme.colors.text.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  height: 100%;
`;

// 英雄區塊 標題
export const HeroTitle = styled.h1`
  text-shadow: ${({ theme }) => theme.shadow.text.main};
  font-size: ${({ theme }) => theme.typography.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  text-align: right;
  width: 100%;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

// 英雄區塊 副標題
export const HeroSubtitle = styled.p`
  text-shadow: ${({ theme }) => theme.shadow.text.main};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  line-height: 1.6;
  text-align: right;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

//// 資訊區塊
export const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// 資訊卡片容器
export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;
