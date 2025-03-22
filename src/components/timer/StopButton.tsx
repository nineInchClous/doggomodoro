import { memo } from 'react';
import { RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface StopButtonProps {
  resetTimerInterval: () => void;
}

const StopButton = memo(function StopButton({ ...props }: StopButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          <Button onClick={props.resetTimerInterval} className={'size-20'}>
            <RotateCcw className={'size-10'} />
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
