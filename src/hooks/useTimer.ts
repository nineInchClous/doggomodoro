import { useCallback, useEffect, useRef, useState } from 'react';
import { TimerActions } from '@/types/interfaces/timerActions';

const defaultTimerSequences = [25, 5, 25, 5, 25, 5, 25, 15];

export const useTimer = (timerSequences: number[] = defaultTimerSequences): TimerActions => {
  const [timeLeft, setTimeLeft] = useState(timerSequences[0]);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const timerIntervalId = useRef<NodeJS.Timeout | null>(null);
  const currentSequenceIndex = useRef(0);

  const startTimerInterval = useCallback(() => {
    setIsTimerActive(true);

    timerIntervalId.current = setInterval(() => {
      setTimeLeft((previousTimeLeft) => previousTimeLeft - 1);
    }, 10);
  }, []);

  const clearTimerInterval = useCallback(() => {
    setIsTimerActive(false);

    if (timerIntervalId.current) {
      clearInterval(timerIntervalId.current);
      timerIntervalId.current = null;
    }
  }, []);

  const setNextTimerSequence = useCallback(() => {
    if (currentSequenceIndex.current === timerSequences.length - 1) return;

    clearTimerInterval();
    currentSequenceIndex.current++;
    setTimeLeft(timerSequences[currentSequenceIndex.current]);
  }, [clearTimerInterval, timerSequences]);

  const resetSequences = useCallback(() => {
    clearTimerInterval();
    currentSequenceIndex.current = 0;
    setTimeLeft(timerSequences[currentSequenceIndex.current]);
  }, [clearTimerInterval, timerSequences]);

  const isTimerOver = useCallback(() => timeLeft <= 0, [timeLeft]);
  const areSequencesOver = useCallback(
    () => currentSequenceIndex.current === timerSequences.length - 1,
    [timerSequences.length]
  );

  useEffect(() => {
    if (timeLeft === 0) {
      clearTimerInterval();
    }
  }, [clearTimerInterval, timeLeft]);

  // Clear timer interval on component unmount
  useEffect(() => {
    return () => {
      clearTimerInterval();
    };
  }, [clearTimerInterval]);

  return {
    timeLeft,
    setTimeLeft,
    startTimerInterval,
    setNextTimerSequence,
    resetSequences,
    clearTimerInterval,
    isTimerActive,
    isTimerOver,
    areSequencesOver,
  };
};
