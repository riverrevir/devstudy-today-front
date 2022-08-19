import * as S from "./landing-css";

export default function Landing() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>devStudy</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <div>2.0</div>
        <div>더 새로워진 코드캠프</div>
        <div>오프라인을 넘어 온라인까지</div>
      </S.ContentWrapper>
      <S.CardWrapper>
        <div>card 1</div>
        <div>card 2</div>
        <div>card 3</div>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
