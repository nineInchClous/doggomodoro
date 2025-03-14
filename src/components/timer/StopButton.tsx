﻿import { Button } from '@/components/ui/button';
import { Square } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dispatch, memo, SetStateAction } from 'react';

interface StopButtonProps {
  clearTimerInterval: () => void;
  setTimeLeft: Dispatch<SetStateAction<number>>;
}

const StopButton = memo(function StopButton({ ...props }: StopButtonProps) {
  const stopTimer = () => {
    props.clearTimerInterval();
    props.setTimeLeft(25 * 60);
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          <Button onClick={stopTimer} className={'size-20'}>
            <Square className={'size-10'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side={'bottom'} className={'text-lg'}>
          <p>Stop</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export default StopButton;
