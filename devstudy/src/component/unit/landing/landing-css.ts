import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 90px auto 0px auto;
`;

export const ContentWrapper = styled.section`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  animation: ${TitleAnimation} 4s ease-out infinite;
`;

export const SecondTitle = styled.div`
  font-size: 20px;
  height: 60px;
  line-height: 50px;
`;

export const ThirdTitle = styled.div`
  font-size: 20px;
  height: 60px;
  line-height: 50px;
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
  }
`;

export const FirstCardTitle = styled.p`
  font-size: 20px;
  padding: 20px;
  border-bottom: 3px solid #000;
`;

export const FirstCardInfo = styled.p`
  padding: 10px;
  font-size: 28px;
`;

export const FirstCardList = styled.ul`
  background: lightcoral;
`;

export const SecondCardOuterWrapper = styled.div`
  width: 380px;
  height: 320px;
  display: flex;
  justify-content: center;
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
  }
`;

export const SecondCardTitle = styled.p`
  font-size: 20px;
  padding: 20px;
  border-bottom: 3px solid #000;
`;

export const SecondCardInfo = styled.p`
  padding: 10px;
  font-size: 28px;
`;

export const ThirdCardOuterWrapper = styled.div`
  width: 380px;
  height: 320px;
  display: flex;
  justify-content: flex-end;
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
  }
`;

export const ThirdCardTitle = styled.p`
  font-size: 20px;
  padding: 20px;
  border-bottom: 3px solid #000;
`;

export const ThirdCardInfo = styled.p`
  padding: 10px;
  font-size: 28px;
`;
