import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #efeff4;
`;

export const StatisticsWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 50px;
  height: 20px;
  color: #d3d3d3;
`;

export const CurrentStudyWrapper = styled.div`
  background-color: #fff;
  width: 300px;
  height: 120px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #efeff4;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const CountWrapper = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
`;

export const Title = styled.h3`
  padding-left: 20px;
`;

export const CompletedStudyWrapper = styled.div`
  background-color: #fff;
  width: 300px;
  height: 120px;
`;

export const StudyProgressWrapper = styled.div`
  background-color: #fff;
  width: 300px;
  height: 120px;
`;

export const FutureStudyWrapper = styled.div`
  background-color: #fff;
  width: 300px;
  height: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
`;

export const CalendarWrapper = styled.section`
  background-color: #fff;
  width: 50%;
  border-right: 1px solid #efeff4;
  border-width: 8px;
`;

export const ProgressWrapper = styled.section`
  background-color: #fff;
  width: 50%;
`;
