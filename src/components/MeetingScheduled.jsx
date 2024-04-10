import React from "react";

const MeetingScheduled = ({ name, email }) => {
  return (
    <div>
      <h1 className="items-center text-4xl text-black mt-8 mb-4">
        ✅ You are scheduled
      </h1>
      <p>A calender invitation has been sent to your email address.</p>
      <div className="block max-w-sm p-6 border border-gray-400 rounded-lg shadow bg-gray-50">
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <hr className="mt-8" />
      <p className="items-center font-bold  text-black mt-8 mb-2">
        Schedule your own meetings with Calendly for free
      </p>
      <p>Eliminate the back-and-forth emails for finding time.</p>
      <div>
        <button className="px-6 m-2 py-3 mt-4 rounded-full border text-gray-1000 border-gray-800">
          Sign up with Google
        </button>
        <button className="px-6 m-2 py-3 mt-4 rounded-full border text-gray-1000 border-gray-800">
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default MeetingScheduled;
