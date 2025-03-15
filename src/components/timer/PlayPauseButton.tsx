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
            <Button onClick={props.clearTimerInterval} className={'size-20'}>
              <Pause strokeWidth={1.75} className={'size-10'} />
            </Button>
          ) : (
            <Button onClick={props.startTimerInterval} className={'size-20'}>
              <Play className={'size-10'} />
            </Button>
          )}
        </TooltipTrigger>
        <TooltipContent side={'bottom'} className={'text-lg'}>
          {props.isTimerActive ? <p>Pause</p> : <p>Play</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export default PlayPauseButton;
