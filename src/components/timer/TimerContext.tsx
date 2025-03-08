'use client';

import React, {createContext, useContext} from "react";
import {TimerHook} from "@/types/interfaces/timerHook";
import {useTimer} from "@/hooks/useTimer";

const TimerContext = createContext<TimerHook | undefined>(undefined);

export const TimerProvider = ({children}: {children: React.ReactNode}) => {
    const timer = useTimer(25 * 60);

    return (
        <TimerContext value={timer}>
            {children}
        </TimerContext>
    );
};

export const useTimerContext = () => {
    const context = useContext(TimerContext);
    if (!context) throw new Error('Missing TimerContext');
    return context;
};