import { Button } from '@/components/ui/button';
import { useTimerContext } from '@/components/timer/TimerContext';
import { Pause, Play } from 'lucide-react';

export default function PlayPauseButton() {
  const { startTimerInterval, clearTimerInterval, isTimerActive } = useTimerContext();

  if (isTimerActive)
    return (
      <Button onClick={clearTimerInterval}>
        <Pause strokeWidth={1.75} />
      </Button>
    );

  return (
    <Button onClick={startTimerInterval}>
      <Play />
    </Button>
  );
}
