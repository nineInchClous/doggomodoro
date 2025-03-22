import { memo } from 'react';
import { ChevronLast } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface NextButtonProps {
  setNextTimer: () => void;
}

const NextButton = memo(function NextRestartButton({ ...props }: NextButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          <Button onClick={props.setNextTimer} className={'size-12'}>
            <ChevronLast className={'size-6'} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side={'bottom'} className={'text-lg'}>
          <p>Next</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export default NextButton;
