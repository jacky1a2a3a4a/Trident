import React from 'react';
import { StyledInfoCard, InfoTitle, InfoText } from './styled';

type InfoCardProps = {
  title: string;
  text: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => {
  return (
    <StyledInfoCard>
      <InfoTitle>{title}</InfoTitle>
      <InfoText>{text}</InfoText>
    </StyledInfoCard>
  );
};

export default InfoCard;
