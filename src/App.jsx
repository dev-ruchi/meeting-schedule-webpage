import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ButtonList from "./components/ButtonList";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
// Your App.tsx file
import "react-day-picker/dist/style.css";

export default function App() {
  const [selected, setSelected] = React.useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="rounded overflow-hidden shadow-lg my-8">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
          <ButtonList />
        </div>
      </div>
    </div>
  );
}
