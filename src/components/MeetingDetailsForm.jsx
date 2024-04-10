import React, { useState } from "react";

const MeetingDetailsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full max-w-xl">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2">
        <div>
          <h1 className="items-center text-4xl text-black mb-8">
            Enter Details
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 w-full h-12 rounded-xl pl-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email *
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 w-full h-12 rounded-xl pl-2"
            />
          </div>
          <button className="px-6 py-3 mt-4 rounded-full border text-blue-600 border-blue-600">
            Add Guests
          </button>
        </div>

        <p className="text-xl font-bold mb-4 mt-8">
          I want Fibery to work for:*
        </p>
        <div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="fiberyWorkFor"
              id="myself"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="myself" className="ms-2 font-medium">
              🥕 Myself
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="fiberyWorkFor"
              id="tenPeople"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="tenPeople" className="ms-2 font-medium">
              👭 10 people
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="fiberyWorkFor"
              id="tenToFiftyPeople"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="tenToFiftyPeople" className="ms-2 font-medium">
              🦄 10-50 people
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="fiberyWorkFor"
              id="fiftyPlusPeople"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="fiftyPlusPeople" className="ms-2 font-medium">
              🦅 50+ people
            </label>
          </div>
        </div>

        <p className="text-xl font-bold  mb-4 mt-8">You are more about *</p>
        <div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              ⛰️ Leadership
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              🦉 Consulting
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              🌞 Product Management
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              🎨 Design
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              💻 Engineering
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              🎣 Sales
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              💣 Marketing
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              💎 Human Resoures
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              📚 Education
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="" className="ms-2 *:font-medium">
              ❓Something else
            </label>
          </div>
        </div>
        <div className="mt-8">
          <div className="">
            <label htmlFor="" className="font-bold  mb-4 mt-8">
              Please, share anything that will help prepare for our meeting
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border"
            ></textarea>
          </div>
          <div>
            <label htmlFor="" className="font-bold  mb-4 mt-8">
              Please, share with us the name of your Fibery workspace(if any)
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border"
            ></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-6 px-4 rounded">
            Schedule Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default MeetingDetailsForm;
