import { Button } from '@/components/ui/button';
import { useTimerContext } from '@/components/timer/TimerContext';
import { Square } from 'lucide-react';

export default function StopButton() {
  const { clearTimerInterval, setTimeLeft } = useTimerContext();

  const stopTimer = () => {
    clearTimerInterval();
    setTimeLeft(25 * 60);
  };

  return (
    <Button onClick={stopTimer}>
      <Square />
    </Button>
  );
}
