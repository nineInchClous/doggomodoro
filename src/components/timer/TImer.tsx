'use client';

import {useEffect, useRef, useState} from "react";

export default function Timer() {
    const defaultTimer = 25 * 60;

    const [timeLeft, setTimeLeft] = useState(defaultTimer);
    const intervalId = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        intervalId.current = setInterval(() => {
            setTimeLeft(previousTimeLeft => previousTimeLeft - 1);
        }, 1000);
    };

    const pauseTimer = () => {
        if (intervalId.current) clearInterval(intervalId.current);
    };

    const stopTimer = () => {
        if (intervalId.current) clearInterval(intervalId.current);
        setTimeLeft(defaultTimer);
    };

    const displayTimer = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        return (
            <p>{minutes} : {seconds}</p>
        );
    };

    useEffect(() => {
        if (timeLeft === 0 && intervalId.current) clearInterval(intervalId.current);
    }, [timeLeft]);

    useEffect(() => {
        return () => {
            if (intervalId.current) clearInterval(intervalId.current);
        };
    }, []);

    return <>
        <h1>timer</h1>
        {displayTimer()}
        <button onClick={startTimer}>start</button>
        <button onClick={pauseTimer}>pause</button>
        <button onClick={stopTimer}>stop</button>
    </>;
}