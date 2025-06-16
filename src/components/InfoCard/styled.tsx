import styled from 'styled-components';

//// 容器
export const StyledInfoCard = styled.div`
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};

  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 345px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

// 標題
export const InfoTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: ${({ theme }) => theme.spacing.sm};

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing.sm};
    right: -${({ theme }) => theme.spacing.sm};
    width: 25px;
    height: 25px;
    border: 8px solid rgba(170, 102, 102, 0.6);
    border-radius: 50%;
  }
`;

// 內文
export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
`;
