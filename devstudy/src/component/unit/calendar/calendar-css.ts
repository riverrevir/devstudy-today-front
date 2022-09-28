import styled from "styled-components";
import { Calendar } from "react-big-calendar";

export const Wrapper = styled.div``;

export const ScheduleCalendar = styled(Calendar)`
  width: 80vw;
  height: 90vh;
  margin: 40px auto;
  :hover {
    cursor: pointer;
  }
`;
