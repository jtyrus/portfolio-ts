import React from "react";

interface ErrorBannerProps {
  errorMessage: string;
  onClose: () => void;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ errorMessage, onClose }) => {
  return (
    <div className="bg-red-400 text-white p-4 fixed top-0 left-0 right-0 z-50">
      {errorMessage}
      <button
        onClick={onClose}
        className="float-right text-white hover:text-gray-300"
      >
        Close
      </button>
    </div>
  );
};

export default ErrorBanner;
