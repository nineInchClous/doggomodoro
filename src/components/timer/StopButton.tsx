import { Button } from '@/components/ui/button';
import { useTimerContext } from '@/components/timer/TimerContext';

export default function StopButton() {
  const { clearTimerInterval, setTimeLeft } = useTimerContext();

  const stopTimer = () => {
    clearTimerInterval();
    setTimeLeft(25 * 60);
  };

  return <Button onClick={stopTimer}>Stop</Button>;
}
