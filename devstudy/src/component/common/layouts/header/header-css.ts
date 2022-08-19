import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  background: beige;
  background-color: #3ba3de;
`;

export const Title = styled.h2`
  padding: 12px;
  width: 20%;
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const FirstWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  height: 40px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const SecondWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  height: 40px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const ThirdWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 13%;
  height: 40px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 6px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
`;

export const Login = styled.div`
  width: 120px;
  height: 40px;
  text-align: center;
  padding-top: 11px;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const RegisterButton = styled.button`
  width: 120px;
  height: 40px;
  color: #3ba3d3;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
