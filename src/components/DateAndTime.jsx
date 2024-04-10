import React, { useState } from "react";
import TimeSlots from "./TimeSlots";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
// Your App.tsx file
import "react-day-picker/dist/style.css";

const DateAndTime = ({ setStep }) => {
  const [selectedDate, setSelectedDate] = React.useState();
  const [selectedTime, setSelectedTime] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }

  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg my-8 flex">
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={footer}
          />
        </div>
        <div>
          {selectedDate ? (
            <TimeSlots
              setStep={setStep}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DateAndTime;
