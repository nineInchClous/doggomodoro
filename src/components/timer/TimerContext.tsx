'use client';

import React, { createContext, useContext } from 'react';
import { TimerActions } from '@/types/interfaces/timerActions';
import { useTimer } from '@/hooks/useTimer';

const TimerContext = createContext<TimerActions | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const timer: TimerActions = useTimer();

  return <TimerContext value={timer}>{children}</TimerContext>;
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) throw new Error('Missing TimerContext');
  return context;
};
