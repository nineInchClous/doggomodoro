import { Button } from '@/components/ui/button';
import { useTimerContext } from '@/components/timer/TimerContext';

export default function PlayPauseButton() {
  const { startTimerInterval, clearTimerInterval, isTimerActive } = useTimerContext();

  if (isTimerActive) return <Button onClick={clearTimerInterval}>Pause</Button>;

  return (
    <Button onClick={startTimerInterval} className={'mx-1'}>
      Start
    </Button>
  );
}
