import { useTimerContext } from '@/components/timer/TimerContext';
import { Progress } from '@/components/ui/progress';
import { getMinutesFromTimeNumber, getSecondsFromTimeNumber } from '@/utils/timer/timeNumberConverter';
import { getTimeLeftPercentage } from '@/utils/timer/timeToPercentageConverter';

export default function TimerDisplay() {
  const { timeLeft } = useTimerContext();

  return (
    <section>
      <p>
        {getMinutesFromTimeNumber(timeLeft)} : {getSecondsFromTimeNumber(timeLeft)}
      </p>
      <Progress value={getTimeLeftPercentage(timeLeft, 25 * 60)} />
    </section>
  );
}
