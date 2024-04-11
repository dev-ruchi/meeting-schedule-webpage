import Navbar from "./components/Navbar";
import MeetingDetailsForm from "./components/MeetingDetailsForm";
import DateAndTime from "./components/DateAndTime";
import MeetingScheduled from "./components/MeetingScheduled";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  const [guests, setGuests] = useState([]);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedTimezone, setSelectedTimezone] = useState(
    "(GMT-12:00) International Date Line West"
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        {step === 1 && (
          <DateAndTime
            setStep={setStep}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedTimezone={selectedTimezone}
            setSelectedDate={setSelectedDate}
            setSelectedTime={setSelectedTime}
            setSelectedTimezone={setSelectedTimezone}
          />
        )}
        {step === 2 && (
          <MeetingDetailsForm
            setStep={setStep}
            guests={guests}
            setGuests={setGuests}
          />
        )}
        {step === 3 && (
          <MeetingScheduled
            guests={guests}
            setStep={setStep}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedTimezone={selectedTimezone}
          />
        )}
      </div>
    </div>
  );
}
