import React from "react";

const Orginization = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-indigo-500">
      <div className="font-serif p-5 mx-auto text-center">
        <h1 className="text-white text-3xl font-serif">
          Hello👋 lets find out where you need to go.
        </h1>
        <h2 className="text-gray-400 text-lg font-serif">
          Please select your role
        </h2>
        <div className="card hover:bg-indigo-100 active:bg-indigo-200">
          Create Orginization
          <h3 className="text-sm text-gray-400">
            I am a manager or business owner and want to create an orginization
          </h3>
          <img 
            src="./assets/orginization-create.png"
            alt="Create Orginization"
            className="w-40 h-45 mx-auto my-3"
            />
        </div>
        <div className="card hover:bg-indigo-100 active:bg-indigo-200">
          Join Orginization
          <h3 className="text-sm text-gray-400">
            I am an employee and want to join my orginization
          </h3>
          <img 
            src="./assets/orginization-join.png"
            alt="Join Orginization"
            className="w-60 h-44 mx-auto my-3"
            />
          </div>
      </div>
    </div>
  );
};

export default Orginization;
