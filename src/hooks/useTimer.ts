import React, { useCallback, useEffect, useRef, useState } from 'react';
import TimerSessions from '@/entities/timerSessions';
import { showPauseTimeNotification, showWorkTimeNotification } from '@/utils/notifications/notificationDisplayer';

export interface TimerHookReturnValue {
  timerSessions: TimerSessions;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  startTimerInterval: () => void;
  setNextTimerSession: () => void;
  resetTimerSessions: () => void;
  clearTimerInterval: () => void;
  isTimerActive: boolean;
  isTimerOver: () => boolean;
}

const defaultTimerSessions: TimerSessions = new TimerSessions([25, 5, 25, 5, 25, 5, 25, 15]);

export const useTimer = (timerSessions: TimerSessions = defaultTimerSessions): TimerHookReturnValue => {
  const [timeLeft, setTimeLeft] = useState(timerSessions.currentSession);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const timerIntervalId = useRef<NodeJS.Timeout | null>(null);

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

  const setNextTimerSession = useCallback(() => {
    if (timerSessions.areAllSessionsOver()) return;

    clearTimerInterval();
    timerSessions.goToNextSession();
    setTimeLeft(timerSessions.currentSession);
  }, [clearTimerInterval, timerSessions]);

  const resetTimerSessions = useCallback(() => {
    clearTimerInterval();
    timerSessions.resetSessions();
    setTimeLeft(timerSessions.currentSession);
  }, [clearTimerInterval, timerSessions]);

  const isTimerOver = useCallback(() => timeLeft <= 0, [timeLeft]);

  useEffect(() => {
    if (isTimerOver()) {
      clearTimerInterval();

      if (timerSessions.isWorkSession) showPauseTimeNotification();
      else showWorkTimeNotification();
    }
  }, [clearTimerInterval, isTimerOver, timeLeft]);

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
    resetTimerSessions,
    clearTimerInterval,
    isTimerActive,
    isTimerOver,
  };
};
