import React, { useState } from "react";
import TimeSlots from "./TimeSlots";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import timezones from "../timezones";

const DateAndTime = ({
  selectedDate,
  selectedTime,
  selectedTimezone,
  setSelectedDate,
  setSelectedTime,
  setSelectedTimezone,
  setStep,
}) => {
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

          <select
            name="timezone"
            id="timezone"
            onChange={(e) => setSelectedTimezone(e.target.value)}
            value={selectedTimezone}
            className="border border-s-0 border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-blue-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {Object.keys(timezones).map((key) => (
              <option key={key} value={timezones[key]}>
                {timezones[key]}
              </option>
            ))}
          </select>
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
