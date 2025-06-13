import {
  Container,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  InfoSection,
  InfoGrid,
} from './styled';
import InfoCard from '../../components/InfoCard';

function Characteristics() {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <HeroTitle>白頭翁 (Chinese bulbul)</HeroTitle>
          <HeroSubtitle>
            又名白頭鶲。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8-10
            年。
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <InfoSection>
        <InfoGrid>
          <InfoCard
            title="外觀"
            text="白頭翁體長約17到22公分，額至頭頂純白色富有光澤，兩眼上方至後枕白色，形成一白色枕環，具羽冠部有一白斑，此白環與白斑在黑色的頭部均為白色，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。"
          />

          <InfoCard
            title="棲地"
            text="白頭翁和麻雀、綠繡眼合稱「都市三寶」，常棲群出現在平原區濕木叢、丘陵樹林地帶，以及校園、公園、庭院、行道樹的各種高喬木的電線與樹上。"
          />

          <InfoCard
            title="食性"
            text="以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，過會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽等，偶爾吃昆蟲。"
          />
        </InfoGrid>
      </InfoSection>
    </Container>
  );
}

export default Characteristics;
