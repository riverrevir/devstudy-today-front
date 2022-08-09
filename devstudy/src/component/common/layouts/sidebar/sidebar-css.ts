import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.section`
  width: 220px;
  height: 100vh;
  background-color: #242526;
`;

export const TitleWrapper = styled.div`
  height: 120px;
  background-color: #000;
`;

export const Title = styled.h3`
  color: #fff;
  padding: 24px 0px 0px 16px;
`;

export const Info = styled.p`
  color: #fff;
  padding: 0px 12px 0px 16px;
  font-size: 20px;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Icons = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 16px;
  width: 30%;
`;

export const HomeWrapper = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 10px 0px 4px 0px;
  background-color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const HomeLabel = styled.label`
  color: #fff;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;

export const ClipboardWrapper = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  background-color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const ClipboardLabel = styled.label`
  color: #fff;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;

export const CalendarWrapper = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  background-color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const CalendarLabel = styled.label`
  color: #fff;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;

export const SettingWrapper = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #000;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const SettingLabel = styled.label`
  color: #fff;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;
