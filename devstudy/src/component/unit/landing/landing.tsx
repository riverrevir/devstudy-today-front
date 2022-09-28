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
            <S.FirstCardTitle>내가 원하는 만큼만 확실하게!</S.FirstCardTitle>
            <S.FirstCardInfo>스터디 관리</S.FirstCardInfo>
            <S.FirstCardList>
              <li>본인 스케줄에 따라 공부을 시작 해보세요</li>
              <li>자유롭게 부담없이 공부를 시작해보세요</li>
            </S.FirstCardList>
          </S.FirstCardWrapper>
        </S.FirstCardOuterWrapper>
        <S.SecondCardOuterWrapper>
          <S.SecondCardWrapper>
            <S.SecondCardTitle>시간 관리가 어려우신분들에게</S.SecondCardTitle>
            <S.SecondCardInfo>일정 관리</S.SecondCardInfo>
            <S.SecondCardList>
              <li>무엇을 끝내야하고 끝냈는지 쉽게 볼수 있어요</li>
              <li>공부 일정을 관리 해보세요</li>
            </S.SecondCardList>
          </S.SecondCardWrapper>
        </S.SecondCardOuterWrapper>
        <S.ThirdCardOuterWrapper>
          <S.ThirdCardWrapper>
            <S.ThirdCardTitle>나이 성별 상관없이</S.ThirdCardTitle>
            <S.ThirdCardInfo>쉽고 간편한</S.ThirdCardInfo>
            <S.ThirdCardList>
              <li>간편하고 쉽게 공부을 시작 그리고 종료 해보세요</li>
            </S.ThirdCardList>
          </S.ThirdCardWrapper>
        </S.ThirdCardOuterWrapper>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
