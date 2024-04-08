import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import TimeSlots from "./components/ButtonList";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
// Your App.tsx file
import "react-day-picker/dist/style.css";

export default function App() {
  const [selectedDate, setSelectedDate] = React.useState();

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="rounded overflow-hidden shadow-lg my-8 flex">
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              footer={footer}
            />
          </div>
          <div>{selectedDate ? <TimeSlots /> : ""}</div>
        </div>
      </div>
    </div>
  );
}
