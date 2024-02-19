'use client';

import { useCountDown } from 'ahooks';

// components/CountdownTimer.js
export function Timer() {
    const [countdown, formattedRes] = useCountDown({
        targetDate: `${new Date().getFullYear()}-05-07 09:00:00`,
    });
    const { days, hours, minutes, seconds, milliseconds } = formattedRes;

    return (
        <div className="flex justify-center space-x-1 sm:space-x-2">
            <div className="flex-1 flex flex-col items-center justify-center sm:p-4 backdrop-blur-sm">
                <span
                    className="text-2xl sm:text-4xl font-bold text-white"
                    suppressHydrationWarning
                >
                    {days}
                </span>
                <span className="text-xs sm:text-sm font-medium text-white uppercase">
                    Days
                </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center sm:p-4 backdrop-blur-sm">
                <span
                    className="text-2xl sm:text-4xl font-bold text-white"
                    suppressHydrationWarning
                >
                    {hours}
                </span>
                <span className="text-xs sm:text-sm font-medium text-white uppercase">
                    Hours
                </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center sm:p-4 backdrop-blur-sm">
                <span
                    className="text-2xl sm:text-4xl font-bold text-white"
                    suppressHydrationWarning
                >
                    {minutes}
                </span>
                <span className="text-xs sm:text-sm font-medium text-white uppercase">
                    Minutes
                </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center sm:p-4 backdrop-blur-sm">
                <span
                    className="text-2xl sm:text-4xl font-bold text-white"
                    suppressHydrationWarning
                >
                    {seconds}
                </span>
                <span className="text-xs sm:text-sm font-medium text-white uppercase">
                    Seconds
                </span>
            </div>
        </div>
    );
}

export default Timer;
