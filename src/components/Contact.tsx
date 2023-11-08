import React, { useState } from "react";
import Input from "./Input";
import ErrorBanner from "./ErrorBanner";

export default function () {
  const [showForm, setShowForm] = useState<boolean>(false);
  const showFormFunc = () => {
    setShowForm(!showForm);
  };

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage(
      "Not implemented yet! Please see the links below in order to contact me."
    );
    setShowError(true);
  };

  const closeError = () => {
    setShowError(false);
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
          className="absolute h-50 transition-all peer-focus-within:-top-6 w-60 gap-y-1
          grid-cols-1 grid place-items-center bg-slate-500 opacity-60 rounded border-b-2 border-r-2 border-l-2"
        >
          <Input label="Your Email" size="md" id="email" height={10}></Input>
          <Input label="Subject" size="md" id="subject" height={10}></Input>
          <Input label="Message" size="lg" id="message" height={16}></Input>
          <button
            onClick={handleFormSubmit}
            className="bg-transparent hover:bg-green-500 text-slate-50 font-semibold hover:text-white py-2 px-4 border border-slate-50 
          hover:border-transparent rounded mb-2"
          >
            Send
          </button>
        </div>
      ) : null}
      {showError && (
        <ErrorBanner errorMessage={errorMessage} onClose={closeError} />
      )}
    </div>
    //</div>
  );
}
