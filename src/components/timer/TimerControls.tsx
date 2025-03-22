import NextButton from '@/components/timer/NextButton';
import PlayPauseButton from '@/components/timer/PlayPauseButton';
import StopButton from '@/components/timer/StopButton';
import { useTimerContext } from '@/components/timer/TimerContext';

export default function TimerControls() {
  const {
    startTimerInterval,
    clearTimerInterval,
    setNextTimerSession,
    resetTimerInterval,
    resetTimerSessions,
    isTimerActive,
    areAllSessionsOver,
  } = useTimerContext();

  return (
    <section className={'flex gap-5 justify-center'}>
      <StopButton resetTimerInterval={resetTimerInterval} />
      <PlayPauseButton
        startTimerInterval={startTimerInterval}
        clearTimerInterval={clearTimerInterval}
        isTimerActive={isTimerActive}
      />
      <NextButton
        setNextTimer={setNextTimerSession}
        resetSequences={resetTimerSessions}
        areAllSessionsOver={areAllSessionsOver}
      />
    </section>
  );
}
