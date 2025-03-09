import TimerStep from '@/entities/timer/timerStep';

export default class TimerSequence {
  private readonly _workStepDuration: number;
  private readonly _pauseStepDuration: number;
  private readonly _timerSteps: TimerStep[];

  constructor(workStepDuration: number, pauseStepDuration: number) {
    this._workStepDuration = workStepDuration;
    this._pauseStepDuration = pauseStepDuration;

    const workStep = new TimerStep(true, this._workStepDuration);
    const pauseStep = new TimerStep(false, this._pauseStepDuration);
    this._timerSteps = [workStep, pauseStep];
  }

  get workStep() {
    return this._timerSteps[0];
  }

  get pauseStep() {
    return this._timerSteps[1];
  }
}
