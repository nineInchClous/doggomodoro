import PlayPauseButton from '@/components/timer/PlayPauseButton';
import StopButton from '@/components/timer/StopButton';
import { useTimerContext } from '@/components/timer/TimerContext';
import NextRestartButton from '@/components/timer/NextRestartButton';

export default function TimerControls() {
  const {
    startTimerInterval,
    clearTimerInterval,
    setTimeLeft,
    setNextTimerSequence,
    resetSequences,
    isTimerActive,
    isTimerOver,
    areSequencesOver,
  } = useTimerContext();

  return (
    <section className={'flex gap-5 justify-center'}>
      {isTimerOver() ? (
        <NextRestartButton
          setNextTimer={setNextTimerSequence}
          resetSequences={resetSequences}
          areSequencesOver={areSequencesOver}
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
