import * as S from "./landing-css";

export default function Landing() {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>devStudy과 함께 공부해요!</S.Title>
        <S.SecondTitle>더 새로워진 devStudy</S.SecondTitle>
        <S.ThirdTitle>언제 어디서든!</S.ThirdTitle>
      </S.ContentWrapper>
      <S.CardWrapper>
        <S.FirstCardOuterWrapper>
          <S.FirstCardWrapper>
            <S.FirstCardTitle>내가 원하는 스택만 확실하게</S.FirstCardTitle>
            <S.FirstCardInfo>온라인 클래스</S.FirstCardInfo>
            <S.FirstCardList>
              <li>오프라인의 커리큘럼과 멘토링 시스템 그대로 제공</li>
              <li>지속적으로 업데이트되는 코드캠프 자체 콘텐츠로 학습</li>
              <li>하루 9시간 멘토상주, 기다림 없는 즉각 피드백</li>
            </S.FirstCardList>
          </S.FirstCardWrapper>
        </S.FirstCardOuterWrapper>
        <S.SecondCardOuterWrapper>
          <S.SecondCardWrapper>
            <S.SecondCardTitle>어디서나 커리어 점프</S.SecondCardTitle>
            <S.SecondCardInfo>코드캠프 온라인</S.SecondCardInfo>
            <ul>
              <li>오프라인의 커리큘럼과 멘토링 시스템 그대로 제공</li>
              <li>지속적으로 업데이트되는 코드캠프 자체 콘텐츠로 학습</li>
              <li>하루 9시간 멘토상주, 기다림 없는 즉각 피드백</li>
            </ul>
          </S.SecondCardWrapper>
        </S.SecondCardOuterWrapper>
        <S.ThirdCardOuterWrapper>
          <S.ThirdCardWrapper>
            <S.ThirdCardTitle>생생한 현장감</S.ThirdCardTitle>
            <S.ThirdCardInfo>코드캠프 오프라인</S.ThirdCardInfo>
            <ul>
              <li>오프라인의 커리큘럼과 멘토링 시스템 그대로 제공</li>
              <li>지속적으로 업데이트되는 코드캠프 자체 콘텐츠로 학습</li>
              <li>하루 9시간 멘토상주, 기다림 없는 즉각 피드백</li>
            </ul>
          </S.ThirdCardWrapper>
        </S.ThirdCardOuterWrapper>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
