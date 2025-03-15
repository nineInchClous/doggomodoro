'use client';

import TimerControls from '@/components/timer/TimerControls';
import TimerDisplay from '@/components/timer/TimerDisplay';
import { TimerProvider } from '@/components/timer/TimerContext';

export default function Timer() {
  return (
    <section className={'w-1/2 min-w-72 m-auto'}>
      <TimerProvider>
        <TimerDisplay />
        <TimerControls />
      </TimerProvider>
    </section>
  );
}
