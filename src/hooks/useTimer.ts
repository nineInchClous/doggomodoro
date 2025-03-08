import { useEffect, useRef, useState } from 'react';
import { TimerHook } from '@/types/interfaces/timerHook';

const defaultTimer = 25 * 60;

export const useTimer = (initialTime: number = defaultTimer): TimerHook => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerIntervalId = useRef<NodeJS.Timeout | null>(null);

  const startTimerInterval = () => {
    timerIntervalId.current = setInterval(() => {
      setTimeLeft((previousTimeLeft) => previousTimeLeft - 1);
    }, 1000);
  };

  const clearTimerInterval = () => {
    if (timerIntervalId.current) clearInterval(timerIntervalId.current);
  };

  useEffect(() => {
    if (timeLeft === 0) clearTimerInterval();
  }, [timeLeft]);

  useEffect(() => {
    return () => {
      clearTimerInterval();
    };
  }, []);

  return {
    timeLeft,
    setTimeLeft,
    startTimerInterval,
    clearTimerInterval,
  };
};
