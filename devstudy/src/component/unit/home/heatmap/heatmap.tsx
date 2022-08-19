import * as S from "./heatmap-css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import "./styles.css";

export default function HeatMap() {
  return (
    <S.Wrapper>
      <CalendarHeatmap
        startDate={new Date("2022-07-01")}
        endDate={new Date("2022-12-31")}
        values={[
          { date: "2022-07-03", count: 1 },
          { date: "2022-08-22", count: 2 },
          { date: "2022-07-29", count: 4 },
          { date: "2022-10-01", count: 1 },
          { date: "2022-10-03", count: 2 },
          { date: "2022-10-06", count: 3 },
          { date: "2022-10-10", count: 4 },
          { date: "2022-10-07", count: 1 },
          { date: "2022-09-15", count: 3 },
        ]}
        // color
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={(value: any) => {
          if (!value || !value.date) {
            return null;
          }
          // react-tooltip
          return {
            "data-tip": `${value.date} has count: ${value.count}`,
          };
        }}
      />
      <ReactTooltip />
    </S.Wrapper>
  );
}
