import React from 'react';

function RobotHero() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900">
      {/* Left Robot */}
      <div className="absolute left-10 w-48 h-72">
        <div className="robot-body w-32 h-48 bg-gradient-to-b from-green-500 to-green-700 rounded-lg relative bottom-0 left-1/2 -translate-x-1/2 animate-robot-bob">
          <div className="robot-head w-24 h-24 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full absolute -top-16 left-1/2 -translate-x-1/2 flex justify-center items-center">
            <div className="robot-eye w-5 h-5 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-3 animate-eye-blink animate-eye-glow"></div>
            <div className="robot-eye w-5 h-5 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full animate-eye-blink animate-eye-glow"></div>
          </div>
          <div className="robot-antenna w-1 h-16 bg-gradient-to-b from-red-500 to-red-700 absolute -top-24 left-1/2 -translate-x-1/2 animate-antenna-wiggle"></div>
          <div className="robot-arm-left w-6 h-32 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg absolute bottom-20 left-4 -rotate-30 origin-top-center animate-arm-swing-left"></div>
          <div className="robot-arm-right w-6 h-32 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg absolute bottom-20 right-4 rotate-30 origin-top-center animate-arm-swing"></div>
          <div className="robot-wheel-left w-12 h-12 bg-gradient-to-b from-gray-900 to-gray-700 rounded-full absolute bottom-6 left-8 animate-wheel-spin"></div>
          <div className="robot-wheel-right w-12 h-12 bg-gradient-to-b from-gray-900 to-gray-700 rounded-full absolute bottom-6 right-8 animate-wheel-spin"></div>
        </div>
      </div>

      {/* Browser Window */}
      <div className="browser-window w-96 h-64 bg-gray-200 rounded-lg shadow-lg z-10"></div>

      {/* Lightning */}
      <div className="lightning absolute w-3/5 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/2 -translate-y-1/2 left-1/5 animate-lightning-strike shadow-blue-500"></div>

      {/* Right Robot */}
      <div className="absolute right-10 w-48 h-72">
        <div className="robot-body w-32 h-48 bg-gradient-to-b from-green-500 to-green-700 rounded-lg relative bottom-0 left-1/2 -translate-x-1/2 animate-robot-bob">
          <div className="robot-head w-24 h-24 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full absolute -top-16 left-1/2 -translate-x-1/2 flex justify-center items-center">
            <div className="robot-eye w-5 h-5 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-3 animate-eye-blink animate-eye-glow"></div>
            <div className="robot-eye w-5 h-5 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full animate-eye-blink animate-eye-glow"></div>
          </div>
          <div className="robot-antenna w-1 h-16 bg-gradient-to-b from-red-500 to-red-700 absolute -top-24 left-1/2 -translate-x-1/2 animate-antenna-wiggle"></div>
          <div className="robot-arm-left w-6 h-32 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg absolute bottom-20 left-4 -rotate-30 origin-top-center animate-arm-swing-left"></div>
          <div className="robot-arm-right w-6 h-32 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg absolute bottom-20 right-4 rotate-30 origin-top-center animate-arm-swing"></div>
          <div className="robot-wheel-left w-12 h-12 bg-gradient-to-b from-gray-900 to-gray-700 rounded-full absolute bottom-6 left-8 animate-wheel-spin"></div>
          <div className="robot-wheel-right w-12 h-12 bg-gradient-to-b from-gray-900 to-gray-700 rounded-full absolute bottom-6 right-8 animate-wheel-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default RobotHero;