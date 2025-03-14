﻿import { useTimerContext } from '@/components/timer/TimerContext';
import { Progress } from '@/components/ui/progress';
import { getMinutesFromTimeNumber, getSecondsFromTimeNumber } from '@/utils/timer/timeNumberConverter';
import { getTimeLeftPercentage } from '@/utils/timer/timeToPercentageConverter';

export default function TimerDisplay() {
  const { timeLeft } = useTimerContext();

  return (
    <section className={'text-center flex flex-col gap-5 p-5'}>
      <p className={'text-8xl'}>
        {getMinutesFromTimeNumber(timeLeft)} : {getSecondsFromTimeNumber(timeLeft)}
      </p>
      <p className={'text-4xl'}>1 / 4</p>
      <Progress value={getTimeLeftPercentage(timeLeft, 25 * 60)} className={'h-4'} />
    </section>
  );
}
