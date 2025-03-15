import { memo } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ChevronLast, RotateCcw } from 'lucide-react';

interface NextRestartButtonProps {
  setNextTimer: () => void;
  resetSequences: () => void;
  areSequencesOver: () => boolean;
}

const NextRestartButton = memo(function NextRestartButton({ ...props }: NextRestartButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={400}>
        <TooltipTrigger asChild>
          {props.areSequencesOver() ? (
            <Button onClick={props.resetSequences} className={'size-20'}>
              <RotateCcw className={'size-10'} />
            </Button>
          ) : (
            <Button onClick={props.setNextTimer} className={'size-20'}>
              <ChevronLast className={'size-10'} />
            </Button>
          )}
        </TooltipTrigger>
        <TooltipContent side={'bottom'} className={'text-lg'}>
          {props.areSequencesOver() ? <p>Restart</p> : <p>Next</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export default NextRestartButton;
