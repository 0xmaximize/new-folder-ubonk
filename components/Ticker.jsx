import { useState, useEffect } from 'react';

const Ticker = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const formatTimeUnit = (unit) => (unit ? unit.toString().padStart(2, '0') : '00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center">
      <h4 className="text-white font-bold">Presale starts in</h4>
      <div className="flex gap-4 mt-4">
        <div className="bg-orange-400 p-2 rounded-md w-[40px]">
          <h4 className="font-bold text-orange-100">{formatTimeUnit(timeLeft.days)}</h4>
        </div>
        <div className="bg-orange-400 p-2 rounded-md w-[40px]">
          <h4 className="font-bold text-white">{formatTimeUnit(timeLeft.hours)}</h4>
        </div>
        <div className="bg-orange-400 p-2 rounded-md w-[40px]">
          <h4 className="font-bold text-white">{formatTimeUnit(timeLeft.minutes)}</h4>
        </div>
        <div className="bg-orange-400 p-2 rounded-md w-[40px]">
          <h4 className="font-bold text-white">{formatTimeUnit(timeLeft.seconds)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
