'use client';

import { useState, useEffect } from 'react';

// components/CountdownTimer.js
const CountdownTimer = ({ targetDate }: any) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState({});
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            setTimeLeft(calculateTimeLeft());
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 200);
            return () => clearInterval(timer);
        }
    }, [isClient]);

    return (
        <div className="flex justify-between">
            {Object.keys(timeLeft).length > 0 &&
                Object.entries(timeLeft).map(([unit, value]: any) => (
                    <div
                        key={unit}
                        className="flex w-32 flex-col items-center space-y-2"
                    >
                        <span
                            key={unit}
                            className="min-w-[70px] justify-center rounded-md px-6 text-center font-mono text-4xl font-bold text-white"
                        >
                            {value}
                        </span>
                        <span className="text-xs font-light uppercase text-white">
                            {unit}
                        </span>
                    </div>
                ))}
        </div>
    );
};

export default CountdownTimer;
