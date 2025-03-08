'use client';

import TimerControls from "@/components/timer/TimerControls";
import TimerDisplay from "@/components/timer/TimerDisplay";
import {TimerProvider} from "@/components/timer/TimerContext";

export default function Timer() {
    return <>
        <TimerProvider>
            <TimerDisplay />
            <TimerControls />
        </TimerProvider>
    </>;
}