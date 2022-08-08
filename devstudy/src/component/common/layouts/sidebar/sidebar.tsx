import * as S from "./sidebar-css";
import {
  faHouse,
  faGear,
  faClipboardCheck,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>DevStudy</S.Title>
        <S.Info>당신의 학습을 기록해요.</S.Info>
      </S.TitleWrapper>
      <S.NavBar>
        <S.HomeWrapper>
          <S.Icons icon={faHouse} />
          <S.HomeLabel>홈</S.HomeLabel>
        </S.HomeWrapper>
        <S.ClipboardWrapper>
          <S.Icons icon={faClipboardCheck} />
          <S.ClipboardLabel>공부관리</S.ClipboardLabel>
        </S.ClipboardWrapper>
        <S.CalendarWrapper>
          <S.Icons icon={faCalendarDays} />
          <S.CalendarLabel>일정관리</S.CalendarLabel>
        </S.CalendarWrapper>
        <S.SettingWrapper>
          <S.Icons icon={faGear} />
          <S.SettingLabel>설정</S.SettingLabel>
        </S.SettingWrapper>
      </S.NavBar>
    </S.Wrapper>
  );
}
