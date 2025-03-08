import { Button } from '@/components/ui/button';
import { useTimerContext } from '@/components/timer/TimerContext';
import { Pause, Play } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function PlayPauseButton() {
  const { startTimerInterval, clearTimerInterval, isTimerActive } = useTimerContext();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          {isTimerActive ? (
            <Button onClick={clearTimerInterval}>
              <Pause strokeWidth={1.75} />
            </Button>
          ) : (
            <Button onClick={startTimerInterval}>
              <Play />
            </Button>
          )}
        </TooltipTrigger>
        <TooltipContent>{isTimerActive ? <p>Pause</p> : <p>Play</p>}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
