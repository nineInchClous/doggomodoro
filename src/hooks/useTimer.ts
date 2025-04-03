import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TimerSessions from '@/entities/timerSessions';
import { showBreakTimeNotification, showWorkTimeNotification } from '@/utils/notifications/notificationDisplayer';

export interface TimerHookReturnValue {
  timerSessions: TimerSessions;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  startTimerInterval: () => void;
  setNextTimerSession: () => void;
  resetTimerInterval: () => void;
  clearTimerInterval: () => void;
  isTimerActive: boolean;
}

const defaultTimerSessions: TimerSessions = new TimerSessions([25, 5, 25, 5, 25, 5, 25, 15]);

export const useTimer = (timerSessions: TimerSessions = defaultTimerSessions): TimerHookReturnValue => {
  const [timeLeft, setTimeLeft] = useState(timerSessions.currentSession);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const timerIntervalId = useRef<NodeJS.Timeout | null>(null);

  const isTimerOver = useMemo(() => timeLeft <= 0, [timeLeft]);

  const clearTimerInterval = useCallback(() => {
    setIsTimerActive(false);

    if (timerIntervalId.current) {
      clearInterval(timerIntervalId.current);
      timerIntervalId.current = null;
    }
  }, []);

  const setNextTimerSession = useCallback(() => {
    clearTimerInterval();

    if (timerSessions.areAllSessionsOver) {
      timerSessions.resetSessions();
    } else {
      timerSessions.goToNextSession();
    }

    setTimeLeft(timerSessions.currentSession);
  }, [clearTimerInterval, timerSessions]);

  const startTimerInterval = useCallback(() => {
    if (isTimerOver) setNextTimerSession();
    setIsTimerActive(true);

    timerIntervalId.current = setInterval(() => {
      setTimeLeft((previousTimeLeft) => previousTimeLeft - 1);
    }, 10);
  }, [isTimerOver, setNextTimerSession]);

  const resetTimerInterval = useCallback(() => {
    clearTimerInterval();
    setTimeLeft(timerSessions.currentSession);
  }, [clearTimerInterval, timerSessions.currentSession]);

  useEffect(() => {
    if (isTimerOver) {
      clearTimerInterval();

      if (timerSessions.isWorkSession) showBreakTimeNotification();
      else showWorkTimeNotification();
    }
  }, [clearTimerInterval, isTimerOver, timeLeft, timerSessions.isWorkSession]);

  // Clear timer interval on component unmount
  useEffect(() => {
    return () => {
      clearTimerInterval();
    };
  }, [clearTimerInterval]);

  return {
    timerSessions,
    timeLeft,
    setTimeLeft,
    startTimerInterval,
    setNextTimerSession,
    resetTimerInterval,
    clearTimerInterval,
    isTimerActive,
  };
};
