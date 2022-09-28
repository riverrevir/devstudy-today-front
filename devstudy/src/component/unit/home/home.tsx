import * as S from "./home-css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import HeatMap from "./heatmap/heatmap";

export default function Home() {
  return (
    <S.Wrapper>
      <S.StatisticsWrapper>
        <S.CurrentStudyWrapper>
          <S.TitleWrapper>
            <S.Title>진행중인 공부</S.Title>
            <S.Icon icon={faAngleRight} />
          </S.TitleWrapper>
          <S.CountWrapper>
            <span>0</span>
            <span>건</span>
          </S.CountWrapper>
        </S.CurrentStudyWrapper>
        <S.CompletedStudyWrapper>
          <S.TitleWrapper>
            <S.Title>완료한 공부</S.Title>
            <S.Icon icon={faAngleRight} />
          </S.TitleWrapper>
          <S.CountWrapper>
            <span>0</span>
            <span>건</span>
          </S.CountWrapper>
        </S.CompletedStudyWrapper>
        <S.StudyProgressWrapper>
          <S.TitleWrapper>
            <S.Title>공부 진행도</S.Title>
            <S.Icon icon={faAngleRight} />
          </S.TitleWrapper>
          <S.CountWrapper>
            <span>0</span>
            <span>건</span>
          </S.CountWrapper>
        </S.StudyProgressWrapper>
        <S.FutureStudyWrapper>
          <S.TitleWrapper>
            <S.Title>하고싶은 공부</S.Title>
            <S.Icon icon={faAngleRight} />
          </S.TitleWrapper>
          <S.CountWrapper>
            <span>0</span>
            <span>건</span>
          </S.CountWrapper>
        </S.FutureStudyWrapper>
      </S.StatisticsWrapper>
      <S.BottomWrapper>
        <S.CalendarWrapper>
          <div>Simple Calendar</div>
        </S.CalendarWrapper>
        <S.ProgressWrapper>
          <div>HeatMap</div>
          <HeatMap />
        </S.ProgressWrapper>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
