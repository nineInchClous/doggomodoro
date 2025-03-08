import { useTimerContext } from '@/components/timer/TimerContext';
import { Progress } from '@/components/ui/progress';
import { getMinutesFromMilliSeconds, getSecondsFromMilliSeconds } from '@/utils/timer/fromMilliSecondConverter';
import { getTimeLeftPercentage } from '@/utils/timer/timeToPercentageConverter';

export default function TimerDisplay() {
  const { timeLeft } = useTimerContext();

  return (
    <section>
      <p>
        {getMinutesFromMilliSeconds(timeLeft)} : {getSecondsFromMilliSeconds(timeLeft)}
      </p>
      <Progress value={getTimeLeftPercentage(timeLeft, 25 * 60)} />
    </section>
  );
}
