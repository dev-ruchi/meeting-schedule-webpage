import Navbar from "./components/Navbar";
import MeetingDetailsForm from "./components/MeetingDetailsForm";
import DateAndTime from "./components/DateAndTime";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        {step === 1 && <DateAndTime setStep={setStep} />}
        {step === 2 && <MeetingDetailsForm setStep={setStep} />}
      </div>
    </div>
  );
}
