// PinAuthentication.js
import React, { useState } from 'react';
import Conatct from './Conatct';

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

  return (<>
  <div className="flex justify-center items-center h-screen
  ">
  <div className="  mt-20 mb-5  max-w-md   p-6 rounded-md shadow-md bg-slate-300">   
     <h2 className="text-2xl font-semibold mb-4">Pin Authentication</h2>
      <form class="w-full max-w-sm">
  <div class="flex items-center border-b border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password"
value={enteredPin}
onChange={handlePinChange}
/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={handleAuthentication}>
      Submit
    </button>
   
   
  </div>
</form>
    </div>
    </div>
    
     <div className="contact -mt-32">
     <Conatct/>

     </div>
    </>
  );
};

export default PinAuthentication;
