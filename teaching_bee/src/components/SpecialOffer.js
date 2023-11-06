'use client'
import React, { useState, useEffect } from "react";

const SpecialOffer = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const closeBanner = () => {
    setShowBanner(false);
  };

  useEffect(() => {
    if (showBanner) {
      const countdownDate = new Date("2023-12-31T23:59:59").getTime();
      const updateCountdown = () => {
        const now = new Date().getTime();
        const timeRemaining = countdownDate - now;

        if (timeRemaining <= 0) {
          setShowBanner(false);
          return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);

      return () => clearInterval(interval);
    }
  }, [showBanner]);

  return (
   
    <div className="flex  bg-blue-400 p-4 justify-around text-white">
      {showBanner && (
        <>
          <div className="flex flex-col items-center  justify-around text-center pl-14">
            <p className="text-xl font-bold mb-2">
              Special Offer: Get an additional 20% Off on Lifetime and Yearly subscription
            </p>
            <p className="text-xl font-bold mb-2">Use coupon code DG20 at checkout</p>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">{remainingTime.days}</p>
                <div className="text-xl base">DAYS</div>
              </div>
              <div className="text-xl">:</div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">{remainingTime.hours}</p>
                <div className="text-xl base">HOURS</div>
              </div>
              <div className="text-xl">:</div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">{remainingTime.minutes}</p>
                <div className="text-xl base">MINUTES</div>
              </div>
              <div className="text-xl">:</div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">{remainingTime.seconds}</p>
                <div className="text-base">SECONDS</div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <img onClick={closeBanner} width="24" height="24" src="https://img.icons8.com/ios/50/multiply.png" alt="close" />
          </div>
        </>
      )}
    </div>

  );
};

export default SpecialOffer;
