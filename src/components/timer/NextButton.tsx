import { memo } from 'react';
import { ChevronLast } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface NextButtonProps {
  setNextTimer: () => void;
  resetSequences: () => void;
  areAllSessionsOver: boolean;
}

const NextButton = memo(function NextRestartButton({ ...props }: NextButtonProps) {
  const handleButtonClick = () => {
    if (props.areAllSessionsOver) props.resetSequences();
    else props.setNextTimer();
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          <Button onClick={handleButtonClick} className={'size-12'}>
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
