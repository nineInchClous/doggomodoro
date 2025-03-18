import { useTimerContext } from '@/components/timer/TimerContext';
import { Progress } from '@/components/ui/progress';
import { getMinutesFromTimeNumber, getSecondsFromTimeNumber } from '@/utils/timer/timeNumberConverter';
import { getTimeLeftPercentage } from '@/utils/timer/timeToPercentageConverter';
import { secondsOrMinutesToString } from '@/utils/timer/timeStringFormatter';

export default function TimerDisplay() {
  const { timerSessions, timeLeft } = useTimerContext();

  const minutesLeft = getMinutesFromTimeNumber(timeLeft);
  const secondsLeft = getSecondsFromTimeNumber(timeLeft);

  return (
    <section className={'text-center flex flex-col gap-5 p-5'}>
      <p className={'text-8xl'}>
        {secondsOrMinutesToString(minutesLeft)}:{secondsOrMinutesToString(secondsLeft)}
      </p>
      <Progress value={getTimeLeftPercentage(timeLeft, timerSessions.currentSession)} className={'h-4'} />
      <p className={'text-2xl'}>
        {timerSessions.currentSessionIndex} of {timerSessions.sessionCount} sessions
      </p>
    </section>
  );
}
