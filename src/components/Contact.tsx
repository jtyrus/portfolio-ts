import React, { useState } from "react";
import Input from "./Input";

export default function () {
  const [showForm, setShowForm] = useState<boolean>(false);
  const showFormFunc = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button
        key="Contact"
        onClick={showFormFunc}
        className={`text-gray-300 hover:bg-gray-700 hover:text-white
            rounded-md px-3 py-2 text-sm font-medium
            transition ease-in-out delay-50 hover:-translate=-1 hover:scale-110 duration-100
            `}
      >
        Contact
      </button>
      {showForm ? (
        <div
          className="absolute h-55 transition-all peer-focus-within:-top-6 w-80 gap-y-3 mt-1
          grid-cols-1 grid place-items-center bg-slate-500 opacity-60"
        >
          <Input label="Your Email" size="md" id="email" height={10}></Input>
          <Input label="Subject" size="md" id="subject" height={11}></Input>
          <Input label="Message" size="lg" id="message" height={15}></Input>
          <button className="absolute bottom-0">Send</button>
        </div>
      ) : null}
    </div>
    //</div>
  );
}
