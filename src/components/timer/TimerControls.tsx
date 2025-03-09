import PlayPauseButton from '@/components/timer/PlayPauseButton';
import StopButton from '@/components/timer/StopButton';
import { useTimerContext } from '@/components/timer/TimerContext';

export default function TimerControls() {
  const { startTimerInterval, clearTimerInterval, setTimeLeft, isTimerActive } = useTimerContext();

  return (
    <section>
      <PlayPauseButton
        startTimerInterval={startTimerInterval}
        clearTimerInterval={clearTimerInterval}
        isTimerActive={isTimerActive}
      />
      <StopButton clearTimerInterval={clearTimerInterval} setTimeLeft={setTimeLeft} />
    </section>
  );
}
