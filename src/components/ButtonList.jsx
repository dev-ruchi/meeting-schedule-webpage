import React from "react";
import Button from "./Button";

function ButtonList() {
  // ["09:00", "09:30", "10:00", "10:30" ... "00:00", "00:30", "8:30"]

  let timeList = [];

  for (let i = 9; i <= 23; i++) {
    if (i < 10) {
      timeList.push(`0${i}:00`);
      timeList.push(`0${i}:30`);
    } else {
      timeList.push(`${i}:00`);
      timeList.push(`${i}:30`);
    }
  }
  for (let i = 0; i <= 8; i++) {
    timeList.push(`0${i}:00`);
    timeList.push(`0${i}:30`);
  }

  return (
    <div>
      {timeList.map((time) => {
        return <Button>{time}</Button>;
      })}
    </div>
  );
}

export default ButtonList;
