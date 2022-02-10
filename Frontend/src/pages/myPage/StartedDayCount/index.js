import React from "react";
import * as StartedDay from "./style";

export function StartedDayCount({ date }) {
  return (
    <StartedDay.Wrapper>
      <StartedDay.Title>
        깃팜을 시작한 지<br />
        <span>{date}일째</span> 입니다.
      </StartedDay.Title>
    </StartedDay.Wrapper>
  );
}

StartedDayCount.defaultProps = {
  date: "42",
};