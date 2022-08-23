import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 80px auto 0px auto;
`;

export const ContentWrapper = styled.section`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/images/books.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw 40vh;
`;

const TitleAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  height: 10vh;
  line-height: 70px;
  color: #fff;
  animation: ${TitleAnimation} 4s ease-out infinite;
`;

export const SecondTitle = styled.div`
  font-size: 20px;
  height: 60px;
  line-height: 50px;
  color: #fff;
`;

export const ThirdTitle = styled.div`
  font-size: 20px;
  height: 60px;
  line-height: 50px;
  color: #fff;
`;

export const CardWrapper = styled.section`
  width: 100%;
  height: 70vh;
  background: #efeff4;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const FirstCardOuterWrapper = styled.div`
  width: 380px;
  height: 320px;
  display: flex;
  justify-content: flex-start;
`;

export const FirstCardList = styled.ul`
  visibility: hidden;
`;

export const FirstCardInfo = styled.p`
  padding: 10px;
  font-size: 28px;
`;

export const FirstCardWrapper = styled.div`
  position: relative;
  border: 2px solid #000;
  width: 308px;
  height: 282px;
  border-radius: 8px;
  padding: 10px;
  :hover {
    cursor: pointer;
    width: 380px;
    height: 320px;
    transition: width 0.3s, height 0.3s;
    ${FirstCardList} {
      visibility: visible;
    }
    ${FirstCardInfo} {
      color: #3decad;
    }
  }
`;

export const FirstCardTitle = styled.p`
  font-size: 20px;
  padding: 20px;
  border-bottom: 3px solid #000;
`;

export const SecondCardList = styled.ul`
  visibility: hidden;
`;

export const SecondCardOuterWrapper = styled.div`
  width: 380px;
  height: 320px;
  display: flex;
  justify-content: center;
`;

export const SecondCardInfo = styled.p`
  padding: 10px;
  font-size: 28px;
`;

export const SecondCardWrapper = styled.div`
  position: relative;
  border: 2px solid #000;
  width: 308px;
  height: 282px;
  border-radius: 8px;
  padding: 10px;
  :hover {
    cursor: pointer;
    width: 380px;
    height: 320px;
    transition: width 0.3s, height 0.3s;
    ${SecondCardList} {
      visibility: visible;
    }
    ${SecondCardInfo} {
      color: #3decad;
    }
  }
`;

export const SecondCardTitle = styled.p`
  font-size: 20px;
  padding: 20px;
  border-bottom: 3px solid #000;
`;

export const ThirdCardOuterWrapper = styled.div`
  width: 380px;
  height: 320px;
  display: flex;
  justify-content: flex-end;
`;

export const ThirdCardList = styled.ul`
  visibility: hidden;
`;

export const ThirdCardInfo = styled.p`
  padding: 10px;
  font-size: 28px;
`;

export const ThirdCardWrapper = styled.div`
  position: relative;
  border: 2px solid #000;
  width: 308px;
  height: 282px;
  border-radius: 8px;
  padding: 10px;
  :hover {
    cursor: pointer;
    width: 380px;
    height: 320px;
    transition: width 0.3s, height 0.3s;
    ${ThirdCardList} {
      visibility: visible;
    }
    ${ThirdCardInfo} {
      color: #3decad;
    }
  }
`;

export const ThirdCardTitle = styled.p`
  font-size: 20px;
  padding: 20px;
  border-bottom: 3px solid #000;
`;
