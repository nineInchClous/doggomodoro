'use client';

import React, { createContext, useContext } from 'react';
import { TimerHookReturnValue, useTimer } from '@/hooks/useTimer';

const TimerContext = createContext<TimerHookReturnValue | undefined>(undefined);

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const timer: TimerHookReturnValue = useTimer();

  return <TimerContext value={timer}>{children}</TimerContext>;
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) throw new Error('Missing TimerContext');
  return context;
};
