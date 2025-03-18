import PlayPauseButton from '@/components/timer/PlayPauseButton';
import StopButton from '@/components/timer/StopButton';
import { useTimerContext } from '@/components/timer/TimerContext';
import NextRestartButton from '@/components/timer/NextRestartButton';

export default function TimerControls() {
  const {
    timerSessions,
    startTimerInterval,
    clearTimerInterval,
    setTimeLeft,
    setNextTimerSession,
    resetTimerSessions,
    isTimerActive,
    isTimerOver,
  } = useTimerContext();

  return (
    <section className={'flex gap-5 justify-center'}>
      {isTimerOver() ? (
        <NextRestartButton
          setNextTimer={setNextTimerSession}
          resetSequences={resetTimerSessions}
          areSequencesOver={() => timerSessions.areAllSessionsOver}
        />
      ) : (
        <>
          <PlayPauseButton
            startTimerInterval={startTimerInterval}
            clearTimerInterval={clearTimerInterval}
            isTimerActive={isTimerActive}
          />
          <StopButton clearTimerInterval={clearTimerInterval} setTimeLeft={setTimeLeft} />
        </>
      )}
    </section>
  );
}
