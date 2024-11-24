import React, { useState, useEffect } from "react";

export default function TemporaryCountdown() {
  // Retrieve or initialize the target date
  const getTargetDate = () => {
    const storedDate = localStorage.getItem("targetDate");
    if (storedDate) {
      return new Date(storedDate);
    } else {
      // Set a new default target date (e.g., 7 days from now)
      const newTargetDate = new Date();
      newTargetDate.setDate(newTargetDate.getDate() + 16);
      localStorage.setItem("targetDate", newTargetDate.toISOString());
      return newTargetDate;
    }
  };

  const targetDate = getTargetDate();

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow"
        style={{
          background: "linear-gradient(90deg, #1c1f24, #343a40)",
          padding: "10px 20px",
        }}
      >
        <div className="container">
          <a
            href="/"
            className="navbar-brand d-flex align-items-center fw-bold text-light"
          >
            <span className="text-danger p-2">{timeLeft.days}</span> Days 
            <span className="text-primary p-2">{timeLeft.hours}</span> Hours 
            <span className="text-success p-2">{timeLeft.minutes}</span> Minutes 
            <span className="text-warning p-2">{timeLeft.seconds}</span> Seconds Left to release
            <span className="text-warning p-2"> [shadowdriverJS]</span>
            <span className="text-danger p-1">(FYI: No API and services are available until the release)</span>
          </a>
        </div>
      </nav>
    </>
  );
}