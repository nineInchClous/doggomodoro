import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { memo } from 'react';

interface PlayPauseButtonProps {
  startTimerInterval: () => void;
  clearTimerInterval: () => void;
  isTimerActive: boolean;
}

const PlayPauseButton = memo(function PlayPauseButton({ ...props }: PlayPauseButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          {props.isTimerActive ? (
            <Button onClick={props.clearTimerInterval}>
              <Pause strokeWidth={1.75} />
            </Button>
          ) : (
            <Button onClick={props.startTimerInterval}>
              <Play />
            </Button>
          )}
        </TooltipTrigger>
        <TooltipContent>{props.isTimerActive ? <p>Pause</p> : <p>Play</p>}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export default PlayPauseButton;
