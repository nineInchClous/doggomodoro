import { Button } from "@/components/ui/button";
import {useTimerContext} from "@/components/timer/TimerContext";

export default function PlayPauseButton() {
    const {startTimerInterval, clearTimerInterval} = useTimerContext();

    const startTimer = () => {
        startTimerInterval();
    };

    const pauseTimer = () => {
        clearTimerInterval();
    };

    return <>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={pauseTimer}>Pause</Button>
    </>;
}