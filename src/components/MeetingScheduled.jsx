import React from "react";
import googleLogo from "./images/google.jpeg";
import mircrosoftLogo from "./images/microsoft.png";

const MeetingScheduled = ({
  guests,
  selectedDate,
  selectedTime,
  selectedTimezone,
}) => {
  function formatDate(date) {
    // Array of weekday names
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Array of month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the weekday, month, and day from the Date object
    const weekday = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Construct the formatted string
    const formattedDate = `${weekday}, ${month} ${day}, ${year}`;

    return formattedDate;
  }

  return (
    <div>
      <h1 className="items-center text-4xl text-black mt-8 mb-4">
        ✅ You are scheduled
      </h1>
      <p>A calender invitation has been sent to your email address.</p>
      <div className="block max-w-sm p-6 border border-gray-400 rounded-lg shadow bg-gray-50">
        <div>
          {guests.map((guest) => (
            <p key={guest.email}>{guest.name}</p>
          ))}
        </div>
        <p>{selectedTime}</p>
        <p>{formatDate(selectedDate)}</p>
        <p>{selectedTimezone}</p>
      </div>
      <hr className="mt-8" />
      <p className="items-center font-bold  text-black mt-8 mb-2">
        Schedule your own meetings with Calendly for free
      </p>
      <p>Eliminate the back-and-forth emails for finding time.</p>
      <div className="flex">
        <button className="flex px-6 m-2 py-3 mt-4 rounded-full border text-gray-1000 border-gray-800">
          <img className="w-8 pr-2" src={googleLogo} alt="google logo" />
          Sign up with Google
        </button>
        <button className="flex px-6 m-2 py-3 mt-4 rounded-full border text-gray-1000 border-gray-800">
          <img className="w-8 pr-2" src={mircrosoftLogo} alt="mircosoft logo" />
          Sign up with Microsoft
        </button>
      </div>
      <p className="text-blue-500 mt-2 px-32">Sign Up with work email</p>
      <div>
        <footer className="text-blue-500 mt-4">cookie setting</footer>
      </div>
    </div>
  );
};

export default MeetingScheduled;
