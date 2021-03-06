import React, { useState } from "react";
import DateController from "@/components/DateController";

import { Container } from "./style";
import Calender from "./Calender";
import ColorGuide from "./ColorGuide";
import SpeechBubble from "./SpeechBubble";

function MonthlyCalender() {
  const toDay = new Date();
  const [date, setDate] = useState(toDay);

  // const changeDate = (value) => {
  //   const newDate = new Date(date.getFullYear(), date.getMonth() + value);
  //   setDate(newDate);
  // };
  // const clickPrev = () => {
  //   if (date.getFullYear() - 2000 <= 0) return;
  //   changeDate(-1);
  // };
  // const clickNext = () => {
  //   if (
  //     String(toDay.getFullYear()) + String(toDay.getMonth()) ===
  //     String(date.getFullYear()) + String(date.getMonth())
  //   )
  //     return;
  //   changeDate(1);
  // };

  const goToday = () => {
    setDate(toDay);
  };
  return (
    <Container>
      <DateController
        date={date}
        // clickPrev={clickPrev}
        // clickNext={clickNext}
        goToday={goToday}
        month
      />

      <Calender date={date} />

      <ColorGuide />
      <SpeechBubble />
    </Container>
  );
}

export default MonthlyCalender;
