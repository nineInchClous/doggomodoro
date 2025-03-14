import React from 'react';

export interface TimerActions {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  startTimerInterval: () => void;
  setNextTimerSequence: () => void;
  resetSequences: () => void;
  clearTimerInterval: () => void;
  isTimerActive: boolean;
  isTimerOver: () => boolean;
  areSequencesOver: () => boolean;
}
