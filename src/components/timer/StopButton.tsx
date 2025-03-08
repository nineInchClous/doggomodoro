import { Button } from '@/components/ui/button';
import { useTimerContext } from '@/components/timer/TimerContext';
import { Square } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function StopButton() {
  const { clearTimerInterval, setTimeLeft } = useTimerContext();

  const stopTimer = () => {
    clearTimerInterval();
    setTimeLeft(25 * 60);
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          <Button onClick={stopTimer}>
            <Square />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Stop</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
