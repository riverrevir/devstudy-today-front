import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #efeff4;
`;

export const Wrapper = styled.div`
  width: 420px;
  height: 530px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 2px 4px 8px #888888;
  border: none;
  background-color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 16px 0px 0px 0px;
`;

export const UserInfoWrapper = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const UserIdWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserId = styled.input`
  width: 160px;
  height: 40px;
  ::placeholder {
    opacity: 0.4;
  }
  padding: 6px;
`;

export const Password1 = styled.input`
  width: 270px;
  height: 40px;
  ::placeholder {
    opacity: 0.4;
  }
  padding: 6px;
`;

export const Password2 = styled.input`
  width: 270px;
  height: 40px;
  ::placeholder {
    opacity: 0.4;
  }
  padding: 6px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.input`
  width: 160px;
  height: 40px;
  ::placeholder {
    opacity: 0.4;
  }
  padding: 6px;
`;

export const GenderWrapper = styled.div`
  width: 260px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const MaleWrapper = styled.div`
  width: 50%;
  text-align: center;
`;

export const FemaleWrapper = styled.div`
  width: 50%;
  text-align: center;
`;
