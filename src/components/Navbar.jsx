import React from "react";

function Navbar() {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <h1 className="text-white text-2xl font-bold ml-2">
            Meeting Schedule Page
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
