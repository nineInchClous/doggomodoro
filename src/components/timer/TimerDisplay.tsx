import { useTimerContext } from '@/components/timer/TimerContext';

export default function TimerDisplay() {
  const { timeLeft } = useTimerContext();

  const displayTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
      <p>
        {minutes} : {seconds}
      </p>
    );
  };

  return <section>{displayTimer()}</section>;
}
