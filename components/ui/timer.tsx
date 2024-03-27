'use client'

import { useCountDown } from 'ahooks'
import { useMemo } from 'react'

// components/CountdownTimer.js
export function Timer() {
    const targetDate = useMemo(() => `${new Date().getFullYear()}-05-07`, [])
    const [countdown, formattedRes] = useCountDown({ targetDate })
    const { days, hours, minutes, seconds, milliseconds } = formattedRes
    return (
        <div className="flex justify-center space-x-1 sm:space-x-2">
            <div className="flex flex-1 flex-col items-center justify-center backdrop-blur-sm sm:p-4">
                <span
                    className="text-2xl font-bold text-white sm:text-4xl"
                    suppressHydrationWarning
                >
                    {days}
                </span>
                <span className="text-xs font-medium uppercase text-white sm:text-sm">
                    Days
                </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center backdrop-blur-sm sm:p-4">
                <span
                    className="text-2xl font-bold text-white sm:text-4xl"
                    suppressHydrationWarning
                >
                    {hours}
                </span>
                <span className="text-xs font-medium uppercase text-white sm:text-sm">
                    Hours
                </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center backdrop-blur-sm sm:p-4">
                <span
                    className="text-2xl font-bold text-white sm:text-4xl"
                    suppressHydrationWarning
                >
                    {minutes}
                </span>
                <span className="text-xs font-medium uppercase text-white sm:text-sm">
                    Mins
                </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center backdrop-blur-sm sm:p-4">
                <span
                    className="text-2xl font-bold text-white sm:text-4xl"
                    suppressHydrationWarning
                >
                    {seconds}
                </span>
                <span className="text-xs font-medium uppercase text-white sm:text-sm">
                    Secs
                </span>
            </div>
        </div>
    )
}

export default Timer
