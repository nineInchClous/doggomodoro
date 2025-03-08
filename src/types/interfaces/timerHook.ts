export interface TimerHook {
    timeLeft: number;
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
    startTimerInterval: () => void;
    clearTimerInterval: () => void;
}