import './App.css'; // CSS dosyası

import React, { useEffect, useState } from 'react';

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const deadline = new Date("Jan 1, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const difference = deadline - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            return {
                days,
                hours,
                minutes,
                seconds
            };
        } else {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="countdown">
            <div className="countdown-container">
                <h1 className="countdown-title">Time Left for New Year</h1>
                <p className="countdown-text">{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
            </div>
        </div>
    );
}

export default CountdownTimer;
