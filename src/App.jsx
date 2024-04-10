import Navbar from "./components/Navbar";
import MeetingDetailsForm from "./components/MeetingDetailsForm";
import DateAndTime from "./components/DateAndTime";
import MeetingScheduled from "./components/MeetingScheduled";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        {step === 1 && <DateAndTime setStep={setStep} />}
        {step === 2 && <MeetingDetailsForm name={name} email={email} setName={setName} setEmail={setEmail} setStep={setStep} />}
        {step === 3 && <MeetingScheduled name={name} email={email} setStep={setStep} />}
      </div>
    </div>
  );
}
