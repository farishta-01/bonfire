// PinAuthentication.js
import React, { useState } from 'react';

const PinAuthentication = ({ onAuthenticationSuccess }) => {
  const [enteredPin, setEnteredPin] = useState('');

  const handlePinChange = (event) => {
    setEnteredPin(event.target.value);
  };

  const handleAuthentication = () => {
    // Check if the enteredPin is correct (you can replace this logic with your authentication mechanism)
    const correctPin = '1234'; // Replace with your actual pin
    if (enteredPin === correctPin) {
      onAuthenticationSuccess();
    } else {
      alert('Incorrect pin. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Pin Authentication</h2>
      <label className="block mb-4">
        Enter PIN:
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          type="password"
          value={enteredPin}
          onChange={handlePinChange}
        />
      </label>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleAuthentication}
      >
        Authenticate
      </button>
    </div>
  );
};

export default PinAuthentication;
