import * as S from "./calendar-css";
import { momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useCallback, useMemo, useState } from "react";

export default function Calendar() {
  const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState<any[]>([]);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("일정 적기");
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const onClickRemoveEvent = (event: any) => {
    const newEvents = events.filter((el) => el.start !== event.start);
    setEvents([...newEvents, events]);
  };

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(2000, 1, 1, 6),
    }),
    []
  );

  const eventStyleGetter = (event: any) => {
    console.log("eventGetter:", event.hexColor);
    // const backgroundColor = "#" + event.hexColor;
    const style = {
      backgroundColor: "beige",
      borderRadius: "0px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    return {
      style,
    };
  };

  return (
    <>
      <S.Wrapper>
        <S.ScheduleCalendar
          localizer={localizer}
          events={events}
          selectable={true}
          views={["month", "week", "day"]}
          defaultDate={defaultDate}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={onClickRemoveEvent}
          scrollToTime={scrollToTime}
          eventPropGetter={eventStyleGetter}
        />
      </S.Wrapper>
    </>
  );
}
