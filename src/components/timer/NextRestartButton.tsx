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
            <Button onClick={props.resetSequences}>
              <RotateCcw />
            </Button>
          ) : (
            <Button onClick={props.setNextTimer}>
              <ChevronLast />
            </Button>
          )}
        </TooltipTrigger>
        <TooltipContent>{props.areSequencesOver() ? <p>Restart</p> : <p>Next</p>}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export default NextRestartButton;
