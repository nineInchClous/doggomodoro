import NextRestartButton from '@/components/timer/NextRestartButton';
import PlayPauseButton from '@/components/timer/PlayPauseButton';
import StopButton from '@/components/timer/StopButton';
import { useTimerContext } from '@/components/timer/TimerContext';

export default function TimerControls() {
  const {
    timerSessions,
    startTimerInterval,
    clearTimerInterval,
    setNextTimerSession,
    resetTimerInterval,
    resetTimerSessions,
    isTimerActive,
  } = useTimerContext();

  return (
    <section className={'flex gap-5 justify-center'}>
      <StopButton resetTimerInterval={resetTimerInterval} />
      <PlayPauseButton
        startTimerInterval={startTimerInterval}
        clearTimerInterval={clearTimerInterval}
        isTimerActive={isTimerActive}
      />
      <NextRestartButton
        setNextTimer={setNextTimerSession}
        resetSequences={resetTimerSessions}
        areSequencesOver={() => timerSessions.areAllSessionsOver}
      />
    </section>
  );
}
