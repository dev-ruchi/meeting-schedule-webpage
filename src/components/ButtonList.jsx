import React from "react";

function TimeSlots() {
  // ["09:00", "09:30", "10:00", "10:30" ... "00:00", "00:30", "8:30"]

  let timeSlots = [];

  for (let i = 9; i <= 23; i++) {
    if (i < 10) {
      timeSlots.push(`0${i}:00`);
      timeSlots.push(`0${i}:30`);
    } else {
      timeSlots.push(`${i}:00`);
      timeSlots.push(`${i}:30`);
    }
  }
  for (let i = 0; i <= 8; i++) {
    timeSlots.push(`0${i}:00`);
    timeSlots.push(`0${i}:30`);
  }

  return (
    <div className="h-96 overflow-y-scroll">
      {timeSlots.map((time) => {
        return (
          <div className="mb-1">
            {time == "12:00" ? (
              <div className="flex w-56 gap-1">
                <button className="px-8 py-2 border-2 rounded w-full">
                  12:00
                </button>
                <button className="px-8 py-2 border-2 rounded w-full">
                  Next
                </button>
              </div>
            ) : (
              <button className="px-8 py-2 border-2 rounded w-56">
                {time}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TimeSlots;
